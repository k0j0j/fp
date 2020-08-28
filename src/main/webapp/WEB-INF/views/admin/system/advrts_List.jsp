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
			<h3>ADVERTISEMENT</h3>
				<div class="pb-2 float-right">
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle1">시스템 관리 ▶ 전체 광고 목록</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle2" style="display:none">시스템 관리 ▶ 등록 광고 목록</p>
					<p class="rstrnt-menu-list pl-2" id="myTabContentTitle3" style="display:none">시스템 관리 ▶ 삭제 광고 목록</p>
				</div>
			</div>
			
			<!-- Select-Menu -->
			<div>
				<div class="btn-group btn-group-toggle pl-2 pb-1" data-toggle="buttons">
					<label class="btn btn-light active radio-button radio-button-height">
						<input type="radio" name="options" id="tab1" value="1" onclick="javascript:contentsView(tab1)" checked> 전체 광고 내역
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab2" value="2" onclick="javascript:contentsView(tab2)"> 등록 광고 목록
					</label>
					<label class="btn btn-light radio-button radio-button-height">
						<input type="radio" name="options" id="tab3" value="3" onclick="javascript:contentsView(tab3)"> 삭제 광고 목록
					</label>
				</div>
					
				<!-- 검색 -->
				<div class="float-right" id="search-area">
					<div>
						<input type="text" class="search-input-txt" placeholder="광고 업체 검색">
						<input type="button" class="search-button">
					</div>
				</div>
			</div>
			
			<!-- Board Area -->
			<!-- Tab 1 -->
			<div class="tab-content" id="myTabContent1">
	 			<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
				  	<div class="taplist"></div>
					<table class="table table-hover">
						<colgroup>
							<col width="20%"/>
							<col width="80%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">광고 정보</th>
							</tr>
						</thead>
						<tbody>	
								<tr>
									<td scope="col" class="th-center-txt td-txt">12</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">11</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">10</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">9</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">8</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">7</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">6</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>						
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">5</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">4</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">3</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">2</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								</tr>
								<tr>
									<td scope="col" class="th-center-txt td-txt">1</td>
									<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
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
							<col width="70%"/>
							<col width="15%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">광고 정보</th>
								<th scope="col" class="th-center-title th-menu">등록 일자</th>
							</tr>
						</thead>
						<tbody style="height:30px">
							<tr>
								<td scope="col" class="th-center-txt td-txt">5</td>
								<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">4</td>
								<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">3</td>
								<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">2</td>
								<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">1</td>
								<td scope="col" class="th-center-txt td-txt">타페오 (스페인, 서울 용산구 녹사평대로40길 51)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>							
						</tbody>
					</table>
				</div>
			</div>
			
			<!-- Tab 3 -->
			<div class="tab-content" id="myTabContent3" style="display:none">
				<div class="tab-pane fade show active pl-2" id="home" role="tabpanel" aria-labelledby="home-tab">
						<table class="table table-hover">
						<colgroup>
							<col width="15%"/>
							<col width="70%"/>
							<col width="15%"/>
						</colgroup>
						<thead class="btn-secondary">
							<tr>
								<th scope="col" class="th-center-title th-menu">NO</th>
								<th scope="col" class="th-center-title th-menu">광고 정보</th>
								<th scope="col" class="th-center-title th-menu">삭제 일자</th>
							</tr>
						</thead>
						<tbody style="height:30px">
							<tr>
								<td scope="col" class="th-center-txt td-txt">5</td>
								<td scope="col" class="th-center-txt td-txt">트로이카 (러시아, 서울 용산구 이태원로 164-1)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">4</td>
								<td scope="col" class="th-center-txt td-txt">트로이카 (러시아, 서울 용산구 이태원로 164-1)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">3</td>
								<td scope="col" class="th-center-txt td-txt">트로이카 (러시아, 서울 용산구 이태원로 164-1)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">2</td>
								<td scope="col" class="th-center-txt td-txt">트로이카 (러시아, 서울 용산구 이태원로 164-1)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
							</tr>
							<tr>
								<td scope="col" class="th-center-txt td-txt">1</td>
								<td scope="col" class="th-center-txt td-txt">트로이카 (러시아, 서울 용산구 이태원로 164-1)</td>
								<td scope="col" class="th-center-txt td-txt">2020-07-24</td>
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
	        return false;
	    }
	    if (objVlaue.value == '2') {
	        $('#myTabContent1').css('display', 'none');
	        $('#myTabContent2').css('display', 'block');
	        $('#myTabContent3').css('display', 'none');
	        $('#myTabContentTitle1').css('display', 'none');
	        $('#myTabContentTitle2').css('display', 'block');
	        $('#myTabContentTitle3').css('display', 'none');
	        return false;
	    }
	    if (objVlaue.value == '3') {
	        $('#myTabContent1').css('display', 'none');
	        $('#myTabContent2').css('display', 'none');
	        $('#myTabContent3').css('display', 'block');
	        $('#myTabContentTitle1').css('display', 'none');
	        $('#myTabContentTitle2').css('display', 'none');
	        $('#myTabContentTitle3').css('display', 'block');
	        return false;
	    }
	}
</script>
</html>