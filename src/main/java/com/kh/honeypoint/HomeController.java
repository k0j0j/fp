
package com.kh.honeypoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	/*
	 * @RequestMapping(value = "/home.do", method = RequestMethod.GET) public String
	 * home(Locale locale, Model model) {
	 * logger.info("Welcome home! The client locale is {}.", locale);
	 * 
	 * Date date = new Date(); DateFormat dateFormat =
	 * DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
	 * 
	 * String formattedDate = dateFormat.format(date);
	 * 
	 * model.addAttribute("serverTime", formattedDate );
	 * 
	 * return "home"; }
	 */
	@RequestMapping("main.do")
	public String mainPage() {
		return "main/main";
	}

	@RequestMapping("detail.do")
	public String detailPage() {
		return "restaurant/detailPage";
	}

	@RequestMapping("contact.do")
	public String contactPage() {
		return "main/contact";
	}

	@RequestMapping("reviewWrite.do")
	public String reviewWritePage() {
		return "restaurant/writeReviewPage";
	}

	@RequestMapping("reviewWrite1.do")
	public String reviewWritePage1() {
		return "restaurant/writeReviewPage";
	}

	@RequestMapping("more.do")
	public String morePage() {
		return "main/more";
	}
	
	@RequestMapping("notice.do")
	public String noticePage() {
		return "main/notice";
	}
}
