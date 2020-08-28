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
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle1">맛집 관리 ▶ 맛집 조회</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle2" style="display:none">맛집 관리 ▶ 맛집 신청 목록</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle3" style="display:none">맛집 관리 ▶ 맛집 신청 반려 목록</p>
				</div>
			</div>
			
			<!-- Select-Menu -->
			<div>
				<div class="btn-group btn-group-toggle pl-2 pb-1" data-toggle="buttons">
					<label class="btn btn-light active radio-button radio-button-height">
						<input type="radio" name="options" id="tab1" value="1" onclick="javascript:contentsView(tab1)" checked> 맛집 조회
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab2" value="2" onclick="javascript:contentsView(tab2)"> 신청 목록
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab3" value="3" onclick="javascript:contentsView(tab3)"> 불가 목록
					</label>
				</div>
					
				<!-- 검색 -->
				<div class="float-right" id="search-area">
					<div>
						<input type="text" class="search-input-txt" placeholder="등록된 맛집 검색">
						<input type="button" class="search-button">
					</div>
				</div>
				<!-- <label class="search-txt float-right" style="font-weight:bold">SEARCH　</label> -->
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
							<col width="10%"/>
							<col width="50%"/>
							<col width="20%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">회원ID</th>
								<th scope="col" class="th-center-title th-menu ">맛집 이름(주소)</th>
								<th scope="col" class="th-center-title th-menu">가입일</th>
								<th scope="col" class="th-center-title th-menu">맛집 관리</th>
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
			
			<!-- Tab 2 -->
			<div class="tab-content" id="myTabContent2" style="display:none">
				<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
					<table class="table table-hover">
						<colgroup>
							<col width="20%"/>    
							<col width="60%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">신청 ID</th>
								<th scope="col" class="th-center-title th-menu ">맛집 이름(주소)</th>
								<th scope="col" class="th-center-title th-menu">등록 여부</th>
							</tr>
						</thead>
						<tbody>
								<tr>
									<td scope="col" class="th-center-txt td-txt">rstrnt01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">미등록</td>
								</tr>
								
						</tbody>
					</table>
				</div>
			</div>
			
			<!-- Tab 3 -->
			<div class="tab-content" id="myTabContent3" style="display:none">
				<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
					<table class="table table-hover">
						<colgroup>
							<col width="15%"/>    
							<col width="50%"/>
							<col width="20%"/>
							<col width="15%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">신청 ID</th>
								<th scope="col" class="th-center-title th-menu ">맛집 이름(주소)</th>
								<th scope="col" class="th-center-title th-menu">반려 사유</th>
								<th scope="col" class="th-center-title th-menu">반려 일자</th>
							</tr>
						</thead>
						<tbody>
								<tr>
									<td scope="col" class="th-center-txt td-txt">rstrnt01</td>
									<td scope="col" class="th-center-txt td-txt">청담이상(서울특별시 강남구 청담동 압구정로79길 27)</td>
									<td scope="col" class="th-center-txt td-txt">존재하지 않는 업체</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
								</tr>
								
						</tbody>
					</table>
				</div>
			</div>
			
			
			
			
			
			<div>
				<button class="btn btn-outline-secondary col-12 ml-2 mb-4 btn-more-view">더보기 ▼</button>
				<p></p>
			</div>
		</div>
	</div>
</body>
<script>
	function contentsView(objVlaue) {
	    if (objVlaue.value == '1') {
	        $('#myTabContent1').css('display', 'block');
	        $('#myTabContent2').css('display', 'none');
	        $('#myTabContent3').css('display', 'none');
	        $('#myTabContentTitle1').css('display', 'block');
	        $('#myTabContentTitle2').css('display', 'none');
	        $('#myTabContentTitle3').css('display', 'none');
	        $('#search-area').css('display', 'block');
	        return false;
	    }
	    if (objVlaue.value == '2') {
	        $('#myTabContent1').css('display', 'none');
	        $('#myTabContent2').css('display', 'block');
	        $('#myTabContent3').css('display', 'none');
	        $('#myTabContentTitle1').css('display', 'none');
	        $('#myTabContentTitle2').css('display', 'block');
	        $('#myTabContentTitle3').css('display', 'none');
	        $('#search-area').css('display', 'none');
	        return false;
	    }
	    if (objVlaue.value == '3') {
	        $('#myTabContent1').css('display', 'none');
	        $('#myTabContent2').css('display', 'none');
	        $('#myTabContent3').css('display', 'block');
	        $('#myTabContentTitle1').css('display', 'none');
	        $('#myTabContentTitle2').css('display', 'none');
	        $('#myTabContentTitle3').css('display', 'block');
	        $('#search-area').css('display', 'none');
	        return false;
	    }
	}
</script>
</html>