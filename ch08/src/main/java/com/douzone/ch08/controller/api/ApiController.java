package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.dto.JsonResult;
import com.douzone.ch08.controller.dto.XmlResult;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이타";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습</h1><p>HTML 데이터</p>";
	}

	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		XmlResult.GuestBookVo vo = new XmlResult.GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return XmlResult.success(vo);
	}

	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public Object json() {
		com.douzone.ch08.controller.vo.GuestBookVo vo = new com.douzone.ch08.controller.vo.GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return JsonResult.success(vo);
	}

	@ResponseBody
	@RequestMapping(value="/post01", method=RequestMethod.POST)
	public Object post01(com.douzone.ch08.controller.vo.GuestBookVo vo) {
		// service -> repository : db insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method=RequestMethod.POST)
	public Object post02(@RequestBody com.douzone.ch08.controller.vo.GuestBookVo vo) {
		// service -> repository : db insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
