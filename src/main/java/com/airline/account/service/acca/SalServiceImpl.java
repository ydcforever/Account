package com.airline.account.service.acca;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.model.acca.Sal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/11/25.
 */
@Service
public class SalServiceImpl implements SalService {

    @Autowired
    private SalMapper salMapper;

    @Override
    public List<Sal> queryPrimaryByFile(String table, String fileName) {
        return salMapper.queryPrimaryByFile(table, fileName);
    }

    @Override
    public List<String> querySourceName(String table) {
       return salMapper.querySourceName(table);
    }

    @Override
    public List<Sal> queryDIpSal(Sal cnjSal) {
        return salMapper.queryDIpSal(cnjSal);
    }

    @Override
    public List<Sal> queryDDpSal(Sal cnjSal) {
        return salMapper.queryDDpSal(cnjSal);
    }

    @Override
    public List<Sal> queryMIpSal(Sal cnjSal) {
        return salMapper.queryMIpSal(cnjSal);
    }

    @Override
    public List<Sal> queryMDpSal(Sal cnjSal) {
        return salMapper.queryMDpSal(cnjSal);
    }
}

