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
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle1">시스템 관리 ▶ 전체 문의 내역</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle2" style="display:none">시스템 관리 ▶ 맛집 회원 문의 내역</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle3" style="display:none">시스템 관리 ▶ 일반 회원 문의 내역</p>
				</div>
			</div>
			
			<!-- Select-Menu -->
			<div>
				<div class="btn-group btn-group-toggle pl-2 pb-1" data-toggle="buttons">
					<label class="btn btn-light active radio-button radio-button-height">
						<input type="radio" name="options" id="tab1" value="1" onclick="javascript:contentsView(tab1)" checked> 전체 문의 내역
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab2" value="2" onclick="javascript:contentsView(tab2)"> 맛집 회원 문의
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab3" value="3" onclick="javascript:contentsView(tab3)"> 일반 회원 문의
					</label>
				</div>
					
				<!-- 검색 -->
				<div class="float-right" id="search-area">
					<div>
						<input type="text" class="search-input-txt" placeholder="문의 회원 검색">
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
							<col width="10%"/>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">구분</th>
								<th scope="col" class="th-center-title th-menu">회원 ID</th>
								<th scope="col" class="th-center-title th-menu">문의글 제목</th>
								<th scope="col" class="th-center-title th-menu">문의 일자</th>
								<th scope="col" class="th-center-title th-menu">답변 여부</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<td scope="col" class="th-center-txt td-txt">12</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">미답변</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">11</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">미답변</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">10</td>
									<td scope="col" class="th-center-txt td-txt">맛집</td>
									<td scope="col" class="th-center-txt td-txt">rstrnt01</td>
									<td scope="col" class="th-center-txt td-txt">고객 관리 문의</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">미답변</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">9</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">rstrnt05</td>
									<td scope="col" class="th-center-txt td-txt">건의드립니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-04</td>
									<td scope="col" class="th-center-txt td-txt">미답변</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">8</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">7</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">6</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">5</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">4</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">3</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<td scope="col" class="th-center-txt td-txt">일반</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">결제에 대해서 궁금한게 있는데요</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
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
							<col width="30%"/>
							<col width="20%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">회원 ID</th>
								<th scope="col" class="th-center-title th-menu">문의글 제목</th>
								<th scope="col" class="th-center-title th-menu">문의 일자</th>
								<th scope="col" class="th-center-title th-menu">답변 여부</th>
							</tr>
						</thead>
						<tbody>
								<tr>
									<td scope="col" class="th-center-txt td-txt">3</td>
									<td scope="col" class="th-center-txt td-txt">rstrnt03</td>
									<td scope="col" class="th-center-txt td-txt">건의드립니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">미답변</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<td scope="col" class="th-center-txt td-txt">rstrnt02</td>
									<td scope="col" class="th-center-txt td-txt">정산 시스템에 대해서 이해가 안되는데요.</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<td scope="col" class="th-center-txt td-txt">rstrnt01</td>
									<td scope="col" class="th-center-txt td-txt">업체가 삭제됐습니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
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
							<col width="30%"/>
							<col width="20%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">회원 ID</th>
								<th scope="col" class="th-center-title th-menu">문의글 제목</th>
								<th scope="col" class="th-center-title th-menu">문의 일자</th>
								<th scope="col" class="th-center-title th-menu">답변 여부</th>
							</tr>
						</thead>
						<tbody>
								<tr>
									<td scope="col" class="th-center-txt td-txt">3</td>
									<td scope="col" class="th-center-txt td-txt">user03</td>
									<td scope="col" class="th-center-txt td-txt">예약했는데 전화를 안받아요.</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">미답변</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<td scope="col" class="th-center-txt td-txt">user02</td>
									<td scope="col" class="th-center-txt td-txt">환불했는데 언제 입금이 되나요??</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">미답변</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<td scope="col" class="th-center-txt td-txt">user01</td>
									<td scope="col" class="th-center-txt td-txt">에디터에 대해 궁금한게 있는데요.</td>
									<td scope="col" class="th-center-txt td-txt">2020-08-19</td>
									<td scope="col" class="th-center-txt td-txt">답변 완료</td>
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