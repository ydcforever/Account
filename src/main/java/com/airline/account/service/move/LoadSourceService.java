package com.airline.account.service.move;

import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/12/19.
 */
@Service
public interface LoadSourceService {

    List<String> getSource(String module);

    void updateStatus(String module, String source, String status);

}
