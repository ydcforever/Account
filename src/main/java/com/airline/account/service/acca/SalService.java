package com.airline.account.service.acca;

import com.airline.account.model.acca.Sal;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/11/25.
 */
@Service
public interface SalService {

    public List<Sal> queryCnj(String table, String begin, String end);

    public List<Sal> queryCnjByFile(String table, String fileName);

    public List<String> queryFile(String table);

    public List<Sal> queryDIpSal(Sal cnjSal);

    public List<Sal> queryDDpSal(Sal cnjSal);

    public List<Sal> queryMIpSal(Sal cnjSal);

    public List<Sal> queryMDpSal(Sal cnjSal);

}
