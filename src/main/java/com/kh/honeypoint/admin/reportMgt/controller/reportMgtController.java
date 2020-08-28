package com.kh.honeypoint.admin.reportMgt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class reportMgtController {
	@RequestMapping("resportList.do")
	   public String memberManagement() {
		   return "admin/report/reportMgt";
		}
}
