<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<!-- css 경로 불러오기용 -->
<c:set var="contextPath" value="${ pageContext.servletContext.contextPath }" scope="application" />
<link rel="stylesheet" href="${ contextPath }/resources/css/admin/admin.css" type="text/css"/>
<%-- <link rel="stylesheet" href="${ contextPath }/resources/css/admin/styles.css" type="text/css"/> --%>
<!-- <link href="css/admin/admin.css" rel="stylesheet" /> 
<link href="css/admin/styles.css" rel="stylesheet" /> -->

<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>HONEY POINT! - ADMIN PAGE</title>

<!-- Bootstrap core CSS -->
<link rel="stylesheet" type="text/css"
	href="${contextPath}/resources/vendor/bootstrap/css/bootstrap.css">

<!-- Custom fonts for this template -->
<link
	href="${contextPath}/resources/vendor/fontawesome-free/css/all.min.css"
	rel="stylesheet" type="text/css">
<link
	href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
	rel='stylesheet' type='text/css'>
<link
	href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
	rel='stylesheet' type='text/css'>

<!-- Custom styles for this template -->
<link
	href="${contextPath}/resources/css/main/clean-blog.min.css?ver=1.1"
	rel="stylesheet">

<style>
body {
	padding-top: 70px;
}

</style>
</head>


<body>
	<!-- 배경 애니메이션 -->
	<!-- <div class="line line-1">
		<div class="wave wave1" style="background-image: url(src/main/webapp/WEB-INF/views/admin/common/1.png)"></div>
	</div>
	<div class="line line-1">
		<div class="wave wave2" style="background-image: url(src/main/webapp/WEB-INF/views/admin/common/2.png)"></div>
	</div>
	<div class="line line-1">
		<div class="wave wave3" style="background-image: url(src/main/webapp/WEB-INF/views/admin/common/3.png)"></div>
	</div> -->
	
	
	
	
	
	
	
	

	<nav class="navbar navbar-expand-lg shadow navbar-light fixed-top navbar-background" id="mainNav">
		<div class="container" style="background-color:white !important">
			<a class="navbar-brand" href="index.html">HONEY POINT</a>
			<div class="collapse navbar-collapse" id="navbarResponsive" style="background-color:white">
				<ul class="navbar-nav text-uppercase m-auto flow-ul-menu">
					<li class="nav-item nav-size"><a class="nav-link js-scroll-trigger menutext" href="admin.do">MAIN</a></li>
					<li class="nav-item nav-size">
 						<a class="nav-link js-scroll-trigger menutext" href="rSearch.do">RSTRNT</a>
						<ul class="sub-nav-ul0">
							<li class="nav-item "><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="rSearch.do">　Rstrnt_MGT</a></li>
							<li class="nav-item "><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="rReport.do">　Rstrnt_Report</a></li>							
						</ul>
					</li>
						
					<li class="nav-item nav-size ">
						<a class="nav-link js-scroll-trigger menutext" href="memMgt.do">MEMBER</a>
						<ul class="sub-nav-ul0">
							<li class="nav-item mr-5"><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="memMgt.do">　Member_MGT</a></li>
							<li class="nav-item mr-5"><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="memReport.do">　Member_report</a></li>
						</ul>
					</li>
					
					<li class="nav-item nav-size">
						<a class="nav-link js-scroll-trigger menutext" href="inquryList.do">system</a>
						<ul class="sub-nav-ul0">
							<li class="nav-item mr-5"><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="inquryList.do">　INQUIRY</a></li>							
							<li class="nav-item mr-5"><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="resportList.do">　REPORT</a></li>
							<li class="nav-item mr-5"><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="advrtsList.do">　ADVRTS</a></li>
						</ul>
					</li>
					<li class="nav-item nav-size">
						<a class="nav-link js-scroll-trigger menutext" href="managerList.do">manager</a>
						<ul class="sub-nav-ul0">
							<li class="nav-item mr-5"><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="managerList.do">　Manager_Search</a></li>
							<li class="nav-item mr-5"><a class="nav-link js-scroll-trigger sub-nav-ul0 sub-menutext" href="mngInsert.do">　Manager_SignUp</a></li>
						</ul>
					</li>
				<!-- logout 버튼 -->
				</ul>
				<ul class="navbar-nav text-uppercase ml-2 ">                    	
					<li class="nav-item logoutbtn">
						<a class="nav-link js-scroll-trigger menutext" onclick="logout()">LOGOUT</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>






	<!-- Bootstrap core JavaScript -->
	<script src="${ contextPath }/resources/vendor/jquery/jquery.min.js"></script>
	<script
		src="${ contextPath }/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Custom scripts for this template -->
	<script src="${ contextPath }/resources/js/clean-blog.min.js"></script>


</body>
</html>