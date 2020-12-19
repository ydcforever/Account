package com.airline.account.controller;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.mapper.et.MoveLogMapper;
import com.airline.account.model.acca.Relation;
import com.airline.account.model.acca.Sal;
import com.airline.account.model.et.MoveLog;
import com.airline.account.service.acca.RelationService;
import com.airline.account.service.move.LoadSourceService;
import com.airline.account.service.move.MoveService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fate.schedule.SteerableSchedule;
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
    private LoadSourceService loadSourceService;

    @Autowired
    private MoveService moveService;

    @Autowired
    private SalMapper salMapper;

    @Autowired
    private MoveLogMapper moveLogMapper;

    @Autowired
    private RelationService relationService;

    @RequestMapping(value = "/moveDIp.do", method = RequestMethod.POST)
    @ResponseBody
    @SteerableSchedule(id = "ACCA_SAL_IP_D", cron = "0 0 0 * * ?")
    public void moveDIp() {
        String configId = "ACCA_SAL_IP_D";
        List<String> sources = loadSourceService.getSource(configId);
        for(String file : sources) {
            List<Sal> sals = salMapper.queryPrimaryByFile("ACCA_SAL_IP_D", file);
            for (Sal sal : sals) {
                try {
                    moveService.moveDIp(sal);
                } catch (Exception e) {
                    MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                    moveLogMapper.insertLog(log);
                }
            }
            loadSourceService.updateStatus(configId, file, "Y");
        }
    }

    @RequestMapping(value = "/moveDDp.do", method = RequestMethod.POST)
    @SteerableSchedule(id = "ACCA_SAL_DP_D", cron = "0 0 0 * * ?")
    @ResponseBody
    public void moveDDp() {
        String configId = "ACCA_SAL_DP_D";
        List<String> sources = loadSourceService.getSource(configId);
        for(String file : sources){
            List<Sal> sals = salMapper.queryPrimaryByFile(configId, file);
            for(Sal sal : sals){
                try{
                    moveService.moveDDp(sal);
                }catch (Exception e){
                    MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                    moveLogMapper.insertLog(log);
                }
            }
            loadSourceService.updateStatus(configId, file, "Y");
        }
    }

    @RequestMapping(value = "/moveMIp.do", method = RequestMethod.POST)
    @SteerableSchedule(id = "ACCA_SAL_IP_M", cron = "0 0 0 * * ?")
    @ResponseBody
    public void moveMIp() {
        String configId = "ACCA_SAL_IP_M";
        List<String> sources = loadSourceService.getSource(configId);
        for(String file : sources) {
            List<Sal> sals = salMapper.queryPrimaryByFile(configId, file);
            for (Sal sal : sals) {
                try {
                    moveService.moveMIp(sal);
                } catch (Exception e) {
                    MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                    moveLogMapper.insertLog(log);
                }
            }
            loadSourceService.updateStatus(configId, file, "Y");
        }
    }

    @RequestMapping(value = "/moveMDp.do", method = RequestMethod.POST)
    @SteerableSchedule(id = "ACCA_SAL_DP_M", cron = "0 0 0 * * ?")
    @ResponseBody
    public void moveMDp() {
        String configId = "ACCA_SAL_DP_M";
        List<String> sources = loadSourceService.getSource(configId);
        for(String file : sources) {
            List<Sal> sals = salMapper.queryPrimaryByFile(configId, file);
            for (Sal sal : sals) {
                try {
                    moveService.moveMDp(sal);
                } catch (Exception e) {
                    MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                    moveLogMapper.insertLog(log);
                }
            }
            loadSourceService.updateStatus(configId, file, "Y");
        }
    }

    @RequestMapping(value = "/moveRefund.do", method = RequestMethod.POST)
    @SteerableSchedule(id = "Refund", cron = "0 0 0 * * ?")
    @ResponseBody
    public void moveRefund() {
        String configId = "Refund";
        List<String> sources = loadSourceService.getSource(configId);
        for(String file : sources) {
            List<Relation> relations = relationService.queryRefund(file);
            for (Relation relation : relations){
                try{
                    relationService.updateR(relation);
                } catch (Exception e){
                    MoveLog log = new MoveLog("Ref", "", e.getMessage());
                    moveLogMapper.insertLog(log);
                }
            }
            loadSourceService.updateStatus(configId, file, "Y");
        }
    }


    @RequestMapping(value = "/listFile.do", method = RequestMethod.GET)
    @ResponseBody
    public String queryFile(@RequestParam("tableName")String table) throws Exception {
        List<String> list = salMapper.querySourceName(table);
        if(list != null && list.size() > 0) {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(list);
        } else {
            return "";
        }
    }
}
