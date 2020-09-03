<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="${ pageContext.servletContext.contextPath }" scope="application"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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

<style>
	body {
		padding-top:70px;
	}
</style>
<body>

	<jsp:include page="../common/menubar.jsp" />
<div class="container">
	<br>
	<h2>공지사항</h2>
	<br>
	<table class="table table-hover">
		<thead>
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>날짜</th>
			<th>조회수</th>
		<tr>
		</tr>
		<tbody>
		<tr>
			<td>1</td>
			<td>공지사항입니다.</td>
			<td>관리자</td>
			<td>2020.09.03</td>
			<td>2</td>
		</tr>
		<tr>
			<td>1</td>
			<td>공지사항입니다.</td>
			<td>관리자</td>
			<td>2020.09.03</td>
			<td>2</td>
		</tr>
		<tr>
			<td>1</td>
			<td>공지사항입니다.</td>
			<td>관리자</td>
			<td>2020.09.03</td>
			<td>2</td>
		</tr>
		<tr>
			<td>1</td>
			<td>공지사항입니다.</td>
			<td>관리자</td>
			<td>2020.09.03</td>
			<td>2</td>
		</tr>
		</tbody>
	</table>
	<hr/>
<nav aria-label="Page navigation example">
   <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
<!-- Bootstrap core JavaScript -->
	<script src="${contextPath}/resources/vendor/main/jquery/jquery.min.js"></script>
	 <script
		src="${contextPath}/resources/vendor/main/bootstrap/js/bootstrap.bundle.min.js"></script>
 
	<!-- Custom scripts for this template -->
	<script src="${contextPath}/resources/js/main/clean-blog.min.js"></script>
<br><br>
	<jsp:include page="../common/footer.jsp" />
</body>
</html>