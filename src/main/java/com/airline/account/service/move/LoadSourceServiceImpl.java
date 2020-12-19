package com.airline.account.service.move;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/12/19.
 */
@Service
public class LoadSourceServiceImpl implements LoadSourceService {
    private static final String SQL_QUERY_SOURCE = "select t.source_name from ET_MOVE_CONFIG t "+
            "where t.module_name = ? and t.status='N'";

    private static final String SQL_UPDATE_STATUS = "update ET_MOVE_CONFIG t set t.status = ? " +
            " where t.module_name = ? and t.source_name = ?";
    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Override
    public List<String> getSource(String module) {
        return jdbcTemplate.queryForList(SQL_QUERY_SOURCE, String.class, module);
    }

    @Override
    public void updateStatus(String module, String source, String status) {
        jdbcTemplate.update(SQL_UPDATE_STATUS, status, module, source);
    }
}
