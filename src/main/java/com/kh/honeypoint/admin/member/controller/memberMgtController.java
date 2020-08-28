package com.kh.honeypoint.admin.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class memberMgtController {
   @RequestMapping("memMgt.do")
   public String memberManagement() {
	   return "admin/member/member_Mgt";
	}

   @RequestMapping("memReport.do")
   public String rstrntReport() {
	   return "admin/member/member_Report";
	}
}
