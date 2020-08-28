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
			<h3>RSTRNT MANAGEMENT</h3>
				<div class="pb-2 float-right">
					<p class="rstrnt-menu-list pl-2">관리자 설정 ▶ 관리자 조회</p>
				</div>
			</div>
			
			<!-- Select-Menu -->
			<div>			
				<div class="float-left ml-2">
					<select class="signup-input-text basic-font" style="margin:0px 5px 0px 0px; width:120px; height:28px">
								<option selected>관리자 권한별 조회</option>
								<option value="member">회원 관리</option>
								<option value="rstrnt">맛집 관리</option>
								<option value="report">신고 관리</option>
								<option value="inqury">문의 관리</option>
								<option value="advrts">광고 관리</option>
								<option value="manager">관리자 설정</option>
					</select>
				</div>		
				<!-- 검색 -->
				<div class="float-right mb-2" id="search-area">
					<div class="float-right">
						<input type="text" class="search-input-txt" placeholder="관리자 검색">
						<input type="button" class="search-button">
					</div>
					<div class="float-right">			
						<select class="signup-input-text basic-font" style="margin:0px 5px 0px 0px; width:80px; height:28px">
									<option selected>검색 필터</option>
									<option value="search_Mid">아이디</option>
									<option value="search_Mname">이름</option>
						</select>
					</div>
					<!-- 
					<div class="float-right">
						<div class="btn-group btn-group-toggle pl-2 pb-1" data-toggle="buttons">
						<label class="btn btn-light active radio-button radio-button-height">
							<input type="radio" value="search_Mid" checked>ID
						</label>
						<label class="btn btn-light radio-button radio-button-height">
							<input type="radio" value="search_Mname">NAME
						</label>
						</div>
					</div>
					 -->
				</div>
			</div>
			
			<!-- Board Area -->
			<!-- Tab 1 -->
			<div class="tab-content" id="myTabContent1">
	<!-- 
				<p class="rstrnt-menu-list pl-2">맛집 관리 ▶ 맛집 조회</p>
	-->
	 			<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
					<table class="table table-hover">
						<colgroup>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">회원ID</th>
								<th scope="col" class="th-center-title th-menu">이름</th>
								<th scope="col" class="th-center-title th-menu">관리 권한</th>
								<th scope="col" class="th-center-title th-menu">사용 여부</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<td scope="col" class="th-center-txt td-txt">6</td>
									<td scope="col" class="th-center-txt td-txt">magener06</td>
									<td scope="col" class="th-center-txt td-txt">김관리자</td>
									<td scope="col" class="th-center-txt td-txt">게시판</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">사용중지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">5</td>
									<td scope="col" class="th-center-txt td-txt">magener05</td>
									<td scope="col" class="th-center-txt td-txt">박관리자</td>									
									<td scope="col" class="th-center-txt td-txt">회원관리, 맛집관리</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">사용중지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">4</td>
									<td scope="col" class="th-center-txt td-txt">magener04</td>
									<td scope="col" class="th-center-txt td-txt">황서비스</td>									
									<td scope="col" class="th-center-txt td-txt">신고관리, 문의관리</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">사용중지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">3</td>
									<td scope="col" class="th-center-txt td-txt">magener03</td>
									<td scope="col" class="th-center-txt td-txt">이광고</td>									
									<td scope="col" class="th-center-txt td-txt">관리자설정, 광고관리</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">사용중지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<td scope="col" class="th-center-txt td-txt">magener02</td>
									<td scope="col" class="th-center-txt td-txt">서관리자</td>									
									<td scope="col" class="th-center-txt td-txt">회원관리, 맛집관리, 게시판관리</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">사용중지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<td scope="col" class="th-center-txt td-txt">magener01</td>
									<td scope="col" class="th-center-txt td-txt">마스터</td>									
									<td scope="col" class="th-center-txt td-txt">전체</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">사용중지</button></td>
								</tr>
								
						</tbody>
					</table>
				</div>
			</div>
			
			<div>
				<button class="btn btn-outline-danger col-12 ml-2 mb-4 btn-more-view">더보기 ▼</button>
				<p></p>
			</div>
		</div>
	</div>
</body>

</html>