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

		<div class="container">
		<div class="container-second" style="border: 0px">
			
			<!-- LoginUser & Preview -->
			<div class="w-100 h-25 mt-5 pl-3 pt-3 pb-1  overflow-auto">	
			<h3>RSTRNT REPORT</h3>
			<div class="pb-2 float-right">
				<p class="rstrnt-menu-list pl-2" id="myTabContentTitle1">맛집 관리 ▶ 신고 내역</p>
			</div>
	
			</div>
			<div class="pb-2 float-right">
			</div>
			
			<!-- Board Area -->
			<div class="tab-content" id="myTabContent1">
	 			<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
					<table class="table table-hover">
						<colgroup>
							<col width="10%"/>
							<col width="50%"/>
							<col width="20%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">신고 회원 ID</th>
								<th scope="col" class="th-center-title th-menu">맛집 이름(신고 사유)</th>
								<th scope="col" class="th-center-title th-menu">신고 일자</th>
								<th scope="col" class="th-center-title th-menu">신고 처리</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">삭제</button></td>
								</tr>
						</tbody>
					</table>
				</div>
			</div>
			
			
			<div>
				<button class="btn btn-outline-secondary col-12 ml-2 btn-more-view">더보기 ▼</button>
				<p></p>
			</div>
		</div>
	</div>
</body>
</html>