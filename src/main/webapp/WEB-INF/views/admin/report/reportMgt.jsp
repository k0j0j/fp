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
			<h3>INQURY</h3>
				<div class="pb-2 float-right">
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle1">신고 내역 ▶ 전체 신고 내역</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle2" style="display:none">신고 내역 ▶ 맛집 회원 신고 내역</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle3" style="display:none">신고 내역 ▶ 일반 회원 신고 내역</p>
				</div>
			</div>
			
			<!-- Select-Menu -->
			<div>
				<div class="btn-group btn-group-toggle pl-2 pb-1" data-toggle="buttons">
					<label class="btn btn-light active radio-button radio-button-height">
						<input type="radio" name="options" id="tab1" value="1" onclick="javascript:contentsView(tab1)" checked> 전체 신고 내역
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab2" value="2" onclick="javascript:contentsView(tab2)"> 맛집 회원 신고
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab3" value="3" onclick="javascript:contentsView(tab3)"> 일반 회원 신고
					</label>
				</div>
					
				<!-- 검색 -->
				<!-- 
				<div class="float-right" id="search-area">
					<div>
						<input type="text" class="search-input-txt" placeholder="신고 회원 검색">
						<input type="button" class="search-button">
					</div>
				</div>
				 -->
			</div>
			
			<!-- Board Area -->
			<!-- Tab 1 -->
			<div class="tab-content" id="myTabContent1">
				<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
						<table class="table table-hover">
						<colgroup>
							<col width="10%"/>
							<col width="10%"/>
							<col width="15%"/>
							<col width="35%"/>
							<col width="15%"/>
							<col width="15%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">구분</th>
								<th scope="col" class="th-center-title th-menu">신고 회원 ID</th>
								<th scope="col" class="th-center-title th-menu">피신고 회원 정보</th>
								<th scope="col" class="th-center-title th-menu">신고 일자</th>
								<th scope="col" class="th-center-title th-menu">신고 처리</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<th scope="col" class="th-center-txt td-txt">5</th>
									<th scope="col" class="th-center-txt td-txt">맛집</th>
									<td scope="col" class="th-center-txt td-txt">user02</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">4</td>
									<th scope="col" class="th-center-txt td-txt">맛집</th>
									<td scope="col" class="th-center-txt td-txt">user05</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<th scope="col" class="th-center-txt td-txt">3</th>
									<th scope="col" class="th-center-txt td-txt">회원</th>
									<td scope="col" class="th-center-txt td-txt">rstrnt04</td>
									<td scope="col" class="th-center-txt td-txt">user10(지속적으로 악의적인 리뷰를 등록합니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<th scope="col" class="th-center-txt td-txt">회원</th>
									<td scope="col" class="th-center-txt td-txt">user14</td>
									<td scope="col" class="th-center-txt td-txt">user32(욕설)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<th scope="col" class="th-center-txt td-txt">맛집</th>
									<td scope="col" class="th-center-txt td-txt">user33</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
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
							<col width="15%"/>
							<col width="15%"/>
							<col width="40%"/>
							<col width="15%"/>
							<col width="15%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">신고 회원 ID</th>
								<th scope="col" class="th-center-title th-menu">맛집 정보(신고 사유)</th>
								<th scope="col" class="th-center-title th-menu">신고 일자</th>
								<th scope="col" class="th-center-title th-menu">신고 처리</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<th scope="col" class="th-center-txt td-txt">5</th>
									<td scope="col" class="th-center-txt td-txt">user02</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">4</td>
									<td scope="col" class="th-center-txt td-txt">user05</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">3</td>
									<td scope="col" class="th-center-txt td-txt">user03</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<td scope="col" class="th-center-txt td-txt">user14</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<td scope="col" class="th-center-txt td-txt">user33</td>
									<td scope="col" class="th-center-txt td-txt">황금태(기재된 금액과 실제 금액이 다릅니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
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
							<col width="15%"/>
							<col width="40%"/>
							<col width="15%"/>
							<col width="15%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">신고 회원 ID</th>
								<th scope="col" class="th-center-title th-menu">회원 정보(신고 사유)</th>
								<th scope="col" class="th-center-title th-menu">신고 일자</th>
								<th scope="col" class="th-center-title th-menu">신고 처리</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<th scope="col" class="th-center-txt td-txt">3</th>
									<td scope="col" class="th-center-txt td-txt">rstrnt04</td>
									<td scope="col" class="th-center-txt td-txt">user10(지속적으로 악의적인 리뷰를 등록합니다.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<td scope="col" class="th-center-txt td-txt">user14</td>
									<td scope="col" class="th-center-txt td-txt">user32(욕설)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<td scope="col" class="th-center-txt td-txt">user33</td>
									<td scope="col" class="th-center-txt td-txt">user12(여기저기에 시비걸고 다니는 것 같아요.)</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-05</td>								
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용 정지</button></td>
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