package com.kh.honeypoint.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class admin {
   @RequestMapping("admin.do")
   public String AdminPage() {
	   return "admin/common/admin_main";
   }
}
