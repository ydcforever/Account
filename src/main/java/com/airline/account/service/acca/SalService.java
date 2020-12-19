package com.airline.account.service.acca;

import com.airline.account.model.acca.Sal;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/11/25.
 */
@Service
public interface SalService {

    List<Sal> queryPrimaryByFile(String table, String fileName);

    List<String> querySourceName(String table);

    List<Sal> queryDIpSal(Sal cnjSal);

    List<Sal> queryDDpSal(Sal cnjSal);

    List<Sal> queryMIpSal(Sal cnjSal);

    List<Sal> queryMDpSal(Sal cnjSal);

}
