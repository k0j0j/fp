<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="${ pageContext.servletContext.contextPath }" scope="application"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

<title>HONEYPOINT, 나의 맛집 로드</title>

  <!-- Bootstrap core CSS -->
<link rel="stylesheet" type="text/css"
	href="${contextPath}/resources/vendor/main/bootstrap/css/bootstrap.css">
	
<link rel="stylesheet" type="text/css"
	href="${contextPath}/resources/css/search/search.css">

  <!-- Custom styles for this template -->
<style>
	body {
		padding-top:56px;
	}
	
	Strong {
		font-size : 25px;
		color : #2483ff;
	}
	
	.search-result-text1 {
		margin:0px;
		font-size:25px;
		padding:0px;
		white-space: nowrap;
		
	}
	
	.search-result-text2 {
		margin:0px;
		color:#66666e
	}

</style>
</head>

<body>

	<jsp:include page="../common/menubar.jsp" />
	
  <!-- Page Content -->
  <div class="container">
  	<div class="mt-4">
        <span class="search-result-text1"><strong>'강원도'</strong> 맛집 검색 결과</span>
        <!-- Filter -->
		<button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">
  			Filter!
		</button>


		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog modal-lg">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Filter!</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		           <form id="form1" method="post" action="searchlist.do">
		      <input type="hidden" value="1" name="currentPage">
		      <input type="hidden" value="2" name="searchType">
		      <div class="modal-body">
		          <div class="card card-body">
		<label class="m-auto">가격&nbsp;</label>
		<div class="btn-group btn-group-toggle" data-toggle="buttons">
		
		  <label class="btn btn-secondary active" id="price">
		    <input type="radio" name="price" id="option1" value="만원이하"> 만원이상
		  </label>
		  <label class="btn btn-secondary" id="price">
		    <input type="radio" name="price" id="option2" value="1만원대"> 1만원대
		  </label>
		  <label class="btn btn-secondary" id="price">
		    <input type="radio" name="price" id="option3" value="2만원대"> 2만원대
		  </label>
		    <label class="btn btn-secondary" id="price">
		    <input type="radio" name="price" id="option3" value="3만원대"> 3만원대
		  </label>
		    <label class="btn btn-secondary" id="price">
		    <input type="radio" name="price" id="option3" value="기타"> 기타
		  </label>
		</div>
		<br>
		<label class="m-auto">맛집종류&nbsp;</label>
		<div class="btn-group btn-group-toggle" data-toggle="buttons">
		
		  <label class="btn btn-secondary active" id="price">
		    <input type="radio" name="category" id="option4" value="한식"> 한식
		  </label>
		  <label class="btn btn-secondary" id="price">
		    <input type="radio" name="category" id="option5" value="중식"> 중식
		  </label>
		  <label class="btn btn-secondary" id="price">
		    <input type="radio" name="category" id="option6" value="일식"> 일식
		  </label>
		    <label class="btn btn-secondary" id="price">
		    <input type="radio" name="category" id="option7" value="양식"> 양식
		  </label>
		    <label class="btn btn-secondary" id="price">
		    <input type="radio" name="category" id="option8" value="세계음식"> 세계음식
		  </label>
		      <label class="btn btn-secondary" id="price">
		    <input type="radio" name="category" id="option9" value="뷔페"> 뷔페
		  </label>
		      <label class="btn btn-secondary" id="price">
		    <input type="radio" name="category" id="option10" value="주점"> 주점
		  </label>
		      <label class="btn btn-secondary" id="price">
		    <input type="radio" name="category" id="option11" value="카페"> 카페
		  </label>
		</div>
		<label class="m-auto">주차여부</label>
		<div class="btn-group btn-group-toggle" data-toggle="buttons">
		  <label class="btn btn-secondary active" id="price">
		    <input type="radio" name="parking" id="option12" value="Y"> 주차가능
		  </label>
		  <label class="btn btn-secondary" id="price">
		    <input type="radio" name="parking" id="option13" value="N"> 주차불가
		  </label>
		</div>
		</div>
		      </div>
		      <div class="modal-footer">
		        <div class="form-row align-items-center">
		    <div class="col-auto my-1">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		      <button type="submit" class="btn btn-primary">SEARCH</button>
		    </div>
		  </div>
		      </div>
		      </form>
		    </div>
		  </div>
		</div>
		</div>
		<div>
	</div>
	<div>
	<p class="search-result-text2">n개의 검색결과</p>
	</div>
    
	<br><br>



    <!-- Content Row -->
    <div class="row">
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card One</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card Two</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card Three</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->

	<jsp:include page="../common/footer.jsp" />

  <!-- Bootstrap core JavaScript -->
	<script src="${contextPath}/resources/vendor/main/jquery/jquery.min.js"></script>
	 <script
		src="${contextPath}/resources/vendor/main/bootstrap/js/bootstrap.bundle.min.js"></script>
 
	<!-- Custom scripts for this template -->
	<script src="${contextPath}/resources/js/main/clean-blog.min.js"></script>
	
		<script src="${contextPath}/resources/js/search/search.js"></script>

</body>

</html>

