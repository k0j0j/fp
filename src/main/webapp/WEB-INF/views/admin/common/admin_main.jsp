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
<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gothic+A1:wght@900&display=swap" rel="stylesheet">


<style>
th, td {
	border-bottom: 0.3px solid #c0c0c0;
	padding: 10px;
	width:15%;
	height: 40%;
	font-weight:normal;
}


</style>
</head>

<body>
	<%@ include file="aNav.jsp" %>
	<div class="container">
		<div class="container-second mt-10" style="border: 0px">
			
			<!-- LoginUser & Preview -->
			<div class="w-100 h-25 mt-5 p-3 pt-2 overflow-auto">	
			<h3>ADMIN PAGE</h3>
			<p class="loginUser" style="margin-top:10px !important">MASTER 김관리인</p>
				<table class="preview-table table-center">
					<thead>
					<tr>
						<th class="preview-table-th">접속자 수</th>
						<th class="preview-table-th">신규 회원(일반)</th>
						<th class="preview-table-th">맛집 등록 신청</th>
						<th class="preview-table-th">신규 신고 내역</th>
						<th class="preview-table-th">결제 내역</th>
					</tr>
					</thead>
					<tbody>
			        <tr>
						<th class="preview-point">#,###</th>
						<th class="preview-point">#,###</th>
						<th class="preview-point">#,###</th>
						<th class="preview-point">#,###</th>
						<th class="preview-point">#,###</th>
					</tr>
					</tbody>
				</table>
			</div>
	
			<!-- Inqry & Report -->
			<div class="row">
				<div class="col-sm-12">
					<div class="row" style="margin:0 auto">
						<div class="col col-6 col-sm-6 float-left irarea">
							<label class="title_txt">INQRY LIST</label>
							<button type="button" class="btn-outline-warning title_btn" onclick="location.href='inquryList.do'">더보기</button>
							<p class="main-list-txt">· 문의 내역 1</p>
							<p class="main-list-txt">· 문의 내역 2</p>
							<p class="main-list-txt">· 문의 내역 3</p>
						</div>
					
						<div class="col col-6 col-sm-6 irarea">
					        <label class="title_txt">REPORT LIST</label>
							<button type="button" class="btn-outline-warning title_btn" onclick="location.href='resportList.do'">더보기</button>
							<p class="main-list-txt">· 신고 내역 1</p>
							<p class="main-list-txt">· 신고 내역 2</p>
							<p class="main-list-txt">· 신고 내역 3</p>
						</div>
					</div>
				</div>
		
				<!-- Banner -->
				<div class="w-100 p-3 overflow-auto irarea">
					<div class="col col-12 float-left m-auto left-index " style="border-top: 0.5px dotted #F4E700"></div>
					<p></p>
					<div class="col col-6 col-sm-6 float-left not-margin-top">
						<label class="title_txt">BANNER LIST</label>
						<p class="main-list-txt">· 출력 중인 광고 1</p>
						<p class="main-list-txt">· 출력 중인 광고 2</p>
					</div>
					<div class="col col-6 col-sm-6 float-left not-margin-top">
						<label class="title_txt"></label>
						<button type="button" class="btn-outline-warning title_btn" onclick="location.href='advrtsList.do'">더보기</button>
						<p class="main-list-txt" style="margin-top:20px">· 출력 중인 광고 3</p>
						<p class="main-list-txt">· 출력 중인 광고 4</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>