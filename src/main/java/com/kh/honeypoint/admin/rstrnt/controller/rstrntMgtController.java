package com.kh.honeypoint.admin.rstrnt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class rstrntMgtController {
   @RequestMapping("rSearch.do")
   public String rstrntSearch() {
	   return "admin/rstrnt/rstrnt_Mgt";
	}
   
   @RequestMapping("rReport.do")
   public String rstrntReport() {
	   return "admin/rstrnt/rstrnt_Report";
	}
}
