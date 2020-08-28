package com.kh.honeypoint.admin.manager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class managerController {
	@RequestMapping("managerList.do")
	public String managerList() {
		return "admin/manager/manager_List";
	}

	@RequestMapping("mngInsert.do")
	public String managerInsert() {
		return "admin/manager/manager_Signup";
	}
}
