package com.airline.account.service.move;

import com.airline.account.model.acca.Sal;
import org.springframework.stereotype.Service;

/**
 * Created by ydc on 2020/12/1.
 */
@Service
public interface PraService {

    void moveDDpPra(Sal sal);


    void moveDIpPra(Sal sal);
}
