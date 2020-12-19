package com.airline.account.utils;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

import java.lang.reflect.Method;

/**
 * Created by ydc on 2020/10/13.
 */
public class DynamicDataSource extends AbstractRoutingDataSource {

    private Logger logger = LoggerFactory.getLogger(DynamicDataSource.class);

    private static final ThreadLocal<String> ds = new ThreadLocal<>();

    @Override
    protected Object determineCurrentLookupKey() {
        return ds.get();
    }

    public void intercept(JoinPoint point) throws Exception {
        Class<?> target = point.getTarget().getClass();
        MethodSignature signature = (MethodSignature) point.getSignature();
        for (Class<?> clazz : target.getInterfaces()) {
            resolveDataSource(clazz, signature.getMethod());
        }
        resolveDataSource(target, signature.getMethod());
    }

    private void resolveDataSource(Class<?> clazz, Method method) {
        try {
            Class<?>[] types = method.getParameterTypes();
            if (clazz.isAnnotationPresent(Switch.class)) {
                Switch source = clazz.getAnnotation(Switch.class);
                ds.set(source.value());
            }
            Method m = clazz.getMethod(method.getName(), types);
            if (m != null && m.isAnnotationPresent(Switch.class)) {
                Switch source = m.getAnnotation(Switch.class);
                ds.set(source.value());
            }
        } catch (Exception e) {
            logger.error(clazz + ":" + e.getMessage());
        }
    }
}
