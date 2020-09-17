package com.airline.account.service.move;

import com.airline.account.model.acca.Sal;
import org.springframework.stereotype.Service;

/**
 * Created by ydc on 2020/9/17.
 */
@Service
public interface MoveService {

    public void moveDIp(Sal cnjSal);

    public void moveDDp(Sal cnjSal);

    public void moveMIp(Sal cnjSal);

    public void moveMDp(Sal cnjSal);

}
