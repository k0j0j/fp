<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<c:set var="contextPath"
	value="${ pageContext.servletContext.contextPath }" scope="application" />




<%-- <link rel="stylesheet" href="${ contextPath }/resources/css/styles.css"
type="text/css"> --%>

<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>Clean Blog - Start Bootstrap Theme</title>
<link rel="icon" type="image/x-icon" href="${contextPath}/resources/img/main/restaurant.png" />

<!-- Bootstrap core CSS -->
<link rel="stylesheet" type="text/css"
	href="${contextPath}/resources/vendor/main/bootstrap/css/bootstrap.css">

<!-- Custom fonts for this template -->
<link
	href="${contextPath}/resources/vendor/main/fontawesome-free/css/all.min.css"
	rel="stylesheet" type="text/css">
<link
	href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
	rel='stylesheet' type='text/css'>
<link
	href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
	rel='stylesheet' type='text/css'>

<!-- Custom styles for this template -->


<style>



</style>
</head>


<body>
	<!-- Navigation 로그인 전 -->
	 
	<nav class="navbar navbar-expand-lg navbar-light fixed-top"
		id="mainNav">
		<div class="container">
			<a class="navbar-brand" href="index.jsp">HONEYPOINT</a>
			<button class="navbar-toggler navbar-toggler-right" type="button"
				data-toggle="collapse" data-target="#navbarResponsive"
				aria-controls="navbarResponsive" aria-expanded="false"
				aria-label="Toggle navigation">
				MENU <i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"><a class="nav-link" href="index.html">LOGIN</a>
					</li>
					<li class="nav-item"><a class="nav-link" href="about.html">SIGN
							UP</a></li>

				</ul>
			</div>
		</div>
	</nav>
   
	<!-- Navigation 회원 로그인 후 -->
<!-- 	 
 	<nav class="navbar navbar-expand-lg shadow navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index.html">HONEYPOINT</a>
      
        <ul class="navbar-nav ml-auto">
	<div class="btn-group">
  <button type="button" class="btn btn-default" data-toggle="dropdown" aria-expanded="false">
   userName님, 환영합니다. <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">&nbsp;&nbsp;예약 내역</a></li>
    <li><a href="#">&nbsp;&nbsp;최근 본 맛집</a></li>
    <li><a href="#">&nbsp;&nbsp;찜한 맛집</a></li>
    <li><a href="#">&nbsp;&nbsp;작성한 리뷰</a></li>
    <li><a href="#">&nbsp;&nbsp;마이 페이지</a></li>
    <li><a href="#">&nbsp;&nbsp;로그아웃</a></li>
    
  </ul>
</div>

        </ul>
      </div>
  </nav>
    -->

	<!-- Navigation 관리자 로그인 후 -->
<!-- 
	<nav class="navbar navbar-expand-lg shadow navbar-light fixed-top"
		id="mainNav">
		<div class="container">
			<a class="navbar-brand" href="index.html">HONEYPOINT</a>

			<ul class="navbar-nav ml-auto">
				<div class="btn-group">
					<button type="button" class="btn btn-default"
						data-toggle="dropdown" aria-expanded="false">
						관리자님, 환영합니다. <span class="caret"></span>
					</button>
					<ul class="dropdown-menu" role="menu">
						<li><a href="admin.do">&nbsp;&nbsp;관리자 페이지</a></li>
						<li><a href="#">&nbsp;&nbsp;로그아웃</a></li>

					</ul>
				</div>

			</ul>
		</div>
	</nav>

 -->

	<!-- Footer -->
	<!-- 	<div class="footer">
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<ul class="list-inline text-center">
							<li class="list-inline-item"><a href="#"> <span
									class="fa-stack fa-lg"> <i
										class="fas fa-circle fa-stack-2x"></i> <i
										class="fab fa-twitter fa-stack-1x fa-inverse"></i>
								</span>
							</a></li>
							<li class="list-inline-item"><a href="#"> <span
									class="fa-stack fa-lg"> <i
										class="fas fa-circle fa-stack-2x"></i> <i
										class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
								</span>
							</a></li>
							<li class="list-inline-item"><a href="#"> <span
									class="fa-stack fa-lg"> <i
										class="fas fa-circle fa-stack-2x"></i> <i
										class="fab fa-github fa-stack-1x fa-inverse"></i>
								</span>
							</a></li>
						</ul>
						<p class="copyright text-muted">
							DO IT, DO EAT!<br> &copy; 2020. DO IT DO EAT! Co., Ltd. All
							right reserved.
						</p>
					</div>
				</div>
			</div>
		</footer> -->




	<!-- Bootstrap core JavaScript -->
	<script src="${ contextPath }/resources/vendor/main/jquery/jquery.min.js"></script>
	<!-- <script
		src="${ contextPath }/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
 -->
	<!-- Custom scripts for this template -->
	<script src="${ contextPath }/resources/js/main/clean-blog.min.js"></script>


</body>
</html>