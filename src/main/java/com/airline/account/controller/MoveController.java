package com.airline.account.controller;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.mapper.et.MoveLogMapper;
import com.airline.account.model.acca.Sal;
import com.airline.account.model.et.MoveLog;
import com.airline.account.service.move.MoveService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by ydc on 2020/11/25.
 */
@RestController
@RequestMapping("/et")
public class MoveController {

    @Autowired
    private MoveService moveService;

    @Autowired
    private SalMapper salMapper;

    @Autowired
    private MoveLogMapper moveLogMapper;

    @RequestMapping(value = "/moveDIp.do", method = RequestMethod.POST)
    @ResponseBody
    public void moveDIp(@RequestParam("fileName")String fileName) throws Exception {
        List<Sal> sals = salMapper.queryCnjByFile("ACCA_SAL_IP_D", fileName);
        for (Sal sal : sals){
            try{
                moveService.moveDIp(sal);
            } catch (Exception e) {
                MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                moveLogMapper.insertLog(log);
            }
        }
    }

    @RequestMapping(value = "/moveDDp.do", method = RequestMethod.POST)
    @ResponseBody
    public void moveDDp(@RequestParam("fileName")String fileName) {
        List<Sal> sals = salMapper.queryCnjByFile("ACCA_SAL_DP_D", fileName);
        for(Sal sal : sals){
            try{
                moveService.moveDDp(sal);
            }catch (Exception e){
                MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                moveLogMapper.insertLog(log);
            }
        }
    }

    @RequestMapping(value = "/moveMIp.do", method = RequestMethod.POST)
    @ResponseBody
    public void moveMIp(@RequestParam("fileName")String fileName) {
        List<Sal> sals = salMapper.queryCnjByFile("ACCA_SAL_IP_M", fileName);
        for(Sal sal : sals){
            try {
                moveService.moveMIp(sal);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @RequestMapping(value = "/moveMDp.do", method = RequestMethod.POST)
    @ResponseBody
    public void moveMDp(@RequestParam("fileName")String fileName) {
        List<Sal> sals = salMapper.queryCnjByFile("ACCA_SAL_DP_M", fileName);
        for(Sal sal : sals){
            try {
                moveService.moveMDp(sal);
            } catch (Exception e) {
                MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                moveLogMapper.insertLog(log);
            }
        }
    }

    @RequestMapping(value = "/listFile.do", method = RequestMethod.GET)
    @ResponseBody
    public String queryFile(@RequestParam("tableName")String table) throws JsonProcessingException {
        List<String> list = salMapper.queryFile(table);
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(list);
    }
}
