<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<c:set var="contextPath" value="${ pageContext.servletContext.contextPath }" scope="application" />
<link rel="stylesheet" href="${ contextPath }/resources/css/admin/admin.css" type="text/css"/>

<!-- Font setting -->
<!-- <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gothic+A1:wght@900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
</head>

<body>
	<%@ include file="../common/aNav.jsp" %>
	
	<!-- 배경 이미지 -->
	<div class="container">
		
		<div class="container-second" style="border: 0px">
			
			<!-- LoginUser & Preview -->
			<div class="w-100 h-25 mt-5 pl-3 pt-3  overflow-auto">	
			<h3>ADMIN MANAGEMENT</h3>
				<div class="pb-2 float-right">
					<p class="rstrnt-menu-list pl-2">관리자 설정 ▶ 관리자 등록</p>
				</div>
			</div>
			
			<!-- SIGN UP-->
			<div class="tab-content ">
	 			<div class="tab-pane fade show active pl-2 pb-5" id="home" role="tabpanel" aria-labelledby="home-tab">
					<!-- TITLE -->
					<div class="pt-4" style="text-align:center">
					<h3 style="color:#006a7d">MNG REGISTRATION</h3>
					</div>
					<table class="table  col-8 table-center">
						<tr>
							<th scope="col" class="th-center-title bg-secondary text-center" style="font-size:18px">ID</th>
							<td scope="col" class="th-center-txt"><input type="text" class="signup-input-text" name="id"></td>
						</tr>
						<tr>
							<th scope="col" class="th-center-title bg-secondary text-center" style="font-size:18px">PASSWORD</th>
							<td scope="col" class="th-center-txt"><input type="password" class="signup-input-text" name="password"></td>
						</tr>
						<tr>
							<th scope="col" class="th-center-title bg-secondary text-center" style="font-size:18px">PASSWORD CONF</th>
							<td scope="col" class="th-center-txt"><input type="password" class="signup-input-text"></td>
						</tr>
						<tr>
							<th scope="col" class="th-center-title bg-secondary text-center" style="font-size:18px">NAME</th>
							<td scope="col" class="th-center-txt"><input type="text" class="signup-input-text" name="name"></td>
						</tr>
						<tr>
							<th scope="col" class="th-center-title bg-secondary text-center" style="font-size:18px">AUTHORITY</th>
							<td scope="col" class="th-center-txt">
								<select class="signup-input-text basic-font" style="margin:0px 0px">
									<option selected>관리자 권한 선택</option>
									<option value="member">회원 관리</option>
									<option value="rstrnt">맛집 관리</option>
									<option value="report">신고 관리</option>
									<option value="inqury">문의 관리</option>
									<option value="advrts">광고 관리</option>
									<option value="manager">관리자 설정</option>
								</select>
							</td>
						</tr>							
					</table>					
					<div class="pt-5" style="margin:auto; width:50%; text-align:center">
						<button class="btn btn-warning select-btn dohyeon-font">REGISTRATION</button>
						<button class="btn btn-default select-btn dohyeon-font">CANCEL</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

</html>