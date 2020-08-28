<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<c:set var="contextPath" value="${ pageContext.servletContext.contextPath }" scope="application" />
<link rel="stylesheet" href="${ contextPath }/resources/css/admin/admin.css" type="text/css"/>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gothic+A1:wght@900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">


<!-- GOOGLE CHART -->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['사이트를 자주 이용하지 않습니다.', 6],
      ['이용하고자 하는 맛집의 정보가 부족합니다.	', 2],
      ['타 사이트의 유사 서비스를 이용합니다.', 1],
      ['기타', 2]
    ]);

    var options = {
      title: '탈퇴 사유'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
</script>
    
    
</head>

<body>
	<%@ include file="../common/aNav.jsp" %>

		<div class="container">
		<div class="container-second" style="border: 0px">
			
			<!-- LoginUser & Preview -->
			<div class="w-100 h-25 mt-5 pl-3 pt-3  overflow-auto">	
			<h3>MEMBER MANAGEMENT</h3>
				<div class="pb-2 float-right">
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle1">회원 관리 ▶ 회원 조회</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle2" style="display:none">회원 관리 ▶ 탈퇴 내역 조회</p>
				</div>
			</div>
			
			<!-- Select-Menu -->
			<div>
				<div class="btn-group btn-group-toggle pl-2 pb-1" data-toggle="buttons">
					<label class="btn btn-light active radio-button radio-button-height">
						<input type="radio" name="options" id="tab1" value="1" onclick="javascript:contentsView(tab1)" checked> 회원 조회
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab2" value="2" onclick="javascript:contentsView(tab2)"> 탈퇴 내역
					</label>
				</div>
					
				<!-- 검색 -->
				<div class="float-right" id="search-area">
					<div>
						<input type="text" class="search-input-txt" placeholder="등록된 회원 검색">
						<input type="button" class="search-button">
					</div>
				</div>
				<!-- <label class="search-txt float-right" style="font-weight:bold">SEARCH　</label> -->
			</div>
			
			<!-- Board Area -->
			<!-- Tab 1 -->
			<div class="tab-content" id="myTabContent1">
	 			<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
					<table class="table table-hover">
						<colgroup>
							<col width="15%"/>
							<col width="25%"/>
							<col width="25%"/>
							<col width="20%"/>
							<col width="15%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">회원 ID</th>
								<th scope="col" class="th-center-title th-menu">회원 이름</th>
								<th scope="col" class="th-center-title th-menu">선호하는 지역</th>
								<th scope="col" class="th-center-title th-menu">가입일</th>
								<th scope="col" class="th-center-title th-menu">회원 관리</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">userId01</td>
									<td scope="col" class="th-center-txt td-txt">김회원</td>
									<td scope="col" class="th-center-txt td-txt">서울, 인천</td>
									<td scope="col" class="th-center-txt td-txt">2020-02-19</td>
									<td scope="col" class="th-center-txt td-txt"><button class="btn btn-outline-warning btn-delete">이용정지</button></td>
								</tr>
								
						</tbody>
					</table>
				</div>
			</div>
	
			<!-- Tab 2 -->
			<div class="tab-content" id="myTabContent2" style="display:none">
				<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
					<table class="table table-hover col-8" style="float:left">
						<colgroup>
							<col width="20%"/>    
							<col width="60%"/>
							<col width="20%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">탈퇴 ID</th>
								<th scope="col" class="th-center-title th-menu ">탈퇴 사유</th>
								<th scope="col" class="th-center-title th-menu">탈퇴일</th>
							</tr>
						</thead>
						<tbody>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user01</td>
									<td scope="col" class="th-center-txt td-txt">사이트를 자주 이용하지 않습니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user02</td>
									<td scope="col" class="th-center-txt td-txt">사이트를 자주 이용하지 않습니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user03</td>
									<td scope="col" class="th-center-txt td-txt">기타</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user04</td>
									<td scope="col" class="th-center-txt td-txt">사이트를 자주 이용하지 않습니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user05</td>
									<td scope="col" class="th-center-txt td-txt">이용하고자 하는 맛집의 정보가 부족합니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user06</td>
									<td scope="col" class="th-center-txt td-txt">이용하고자 하는 맛집의 정보가 부족합니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user01</td>
									<td scope="col" class="th-center-txt td-txt">사이트를 자주 이용하지 않습니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user02</td>
									<td scope="col" class="th-center-txt td-txt">사이트를 자주 이용하지 않습니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user03</td>
									<td scope="col" class="th-center-txt td-txt">기타</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user04</td>
									<td scope="col" class="th-center-txt td-txt">사이트를 자주 이용하지 않습니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user05</td>
									<td scope="col" class="th-center-txt td-txt">이용하고자 하는 맛집의 정보가 부족합니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">x_user06</td>
									<td scope="col" class="th-center-txt td-txt">이용하고자 하는 맛집의 정보가 부족합니다.</td>
									<td scope="col" class="th-center-txt td-txt">2020-07-14</td>
								</tr>
						</tbody>
					</table>
					<div id="piechart" style="float:left; width: 33%"></div>
	
				</div>
			</div>
			
			
			<div id="more-btn1">
				<button class="btn btn-outline-secondary col-12 ml-2 mb-4 btn-more-view">더보기 ▼</button>
				<p></p>
			</div>
			<div id="more-btn2" style="display:none">
				<button class="btn btn-outline-secondary ml-2 mb-4 btn-more-view col-8">더보기 ▼</button>
				<p></p>
			</div>
		</div>
	</div>
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
	        $('#more-btn1').css('display', 'block');
	        $('#more-btn2').css('display', 'none');
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
	        $('#more-btn2').css('display', 'block');
	        $('#more-btn1').css('display', 'none');
	        return false;
	    }
	}
</script>
</html>