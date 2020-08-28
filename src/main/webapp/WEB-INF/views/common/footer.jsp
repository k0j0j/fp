<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<c:set var="contextPath"
	value="${ pageContext.servletContext.contextPath }" scope="application" />
<link rel="stylesheet"
	href="${ contextPath }/resources/css/main/clean-blog.css?ver=1.1"
	type="text/css">



<%-- <link rel="stylesheet" href="${ contextPath }/resources/css/styles.css"
type="text/css"> --%>

<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Clean Blog - Start Bootstrap Theme</title>

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
<link
	href="${contextPath}/resources/css/main/clean-blog.min.css?ver=1.1"
	rel="stylesheet">

<style>


.font {
	font-family:"Nanum Gothic",'Malgun Gothic',sans-serif;
	
}


</style>
</head>


<body>


	<footer class="footer bg-light font">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 h-100 text-center text-lg-left my-auto">
					<ul class="list-inline mb-2">
						<li class="list-inline-item"><a href="#">Notice</a></li>
						<li class="list-inline-item">&sdot;</li>
						<li class="list-inline-item"><a href="contact.do">Contact</a></li>
						<li class="list-inline-item">&sdot;</li>
						<li class="list-inline-item"><a href="#">Term of Use</a></li>

					</ul>
					<p class="text-muted small mb-4 mb-lg-0">
						DO IT, DO EAT!<br> &copy; 2020. DO IT DO EAT! Co., Ltd. All
						right reserved.
					</p>
				</div>
				<div class="col-lg-6 h-100 text-center text-lg-right my-auto">
					<ul class="list-inline mb-0">
						<li class="list-inline-item mr-3"><a href="#"> <i
								class="fab fa-facebook fa-2x fa-fw"></i>
						</a></li>
						<li class="list-inline-item mr-3"><a href="#"> <i
								class="fab fa-twitter-square fa-2x fa-fw"></i>
						</a></li>
						<li class="list-inline-item"><a href="#"> <i
								class="fab fa-instagram fa-2x fa-fw"></i>
						</a></li>


					</ul>
				</div>
			</div>
		</div>

	</footer>
	




	<!-- Bootstrap core JavaScript -->
	<script src="${ contextPath }/resources/vendor/main/jquery/jquery.min.js"></script>
	<script
		src="${ contextPath }/resources/vendor/main/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Custom scripts for this template -->
	<script src="${ contextPath }/resources/js/clean-blog.min.js"></script>


</body>
</html>