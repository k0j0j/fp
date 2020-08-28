package com.kh.honeypoint.admin.system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class systemMgtController {
	   @RequestMapping("inquryList.do")
	   public String memberManagement() {
		   return "admin/system/inqury_List";
		}

	   @RequestMapping("advrtsList.do")
	   public String rstrntReport() {
		   return "admin/system/advrts_List";
		}
}
