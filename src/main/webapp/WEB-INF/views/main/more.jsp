<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link rel="stylesheet"
	href="${ contextPath }/resources/css/main/clean-blog.css?ver=1.1"
	type="text/css">
<link href="https://fonts.googleapis.com/css?family=Lato:400,600,700"
	rel="stylesheet" />
<link href="${ contextPath }/resources/css/main/main.css" rel="stylesheet" />

<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>HONEYPOINT🍴</title>

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
	
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>

<style>

body {
	padding-top:70px;
}


</style>

</head>

<body>
	<jsp:include page="../common/menubar.jsp" />


  <!-- Header -->
  <header class="masthead" 
		style="background-image: url('${contextPath}/resources/img/main/random1.jpeg')">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-81 col-md-10 mx-auto">
          <h1 class="display-4 text-white mt-5 mb-2" style="text-align:center;">추천하는 맛집</h1>
          <p class="lead mb-5 text-white-50" style="text-align:center;">한 번 먹으면 잊지 못할 그맛!</p>
        </div>
      </div>
    </div>
  </header>

  <!-- Page Content -->
  <div class="container">

    

    <div class="row">
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="${contextPath}/resources/img/main/food5.jpg" alt="">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://placehold.it/300x200" alt="">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://placehold.it/300x200" alt="">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->



	
<br><br>
	<jsp:include page="../common/footer.jsp" />
	

	<!-- Bootstrap core JavaScript -->
	<script src="${contextPath}/resources/vendor/main/jquery/jquery.min.js"></script>
	 <script
		src="${contextPath}/resources/vendor/main/bootstrap/js/bootstrap.bundle.min.js"></script>
 
	<!-- Custom scripts for this template -->
	<script src="${contextPath}/resources/js/main/clean-blog.min.js"></script>




</body>

</html>

