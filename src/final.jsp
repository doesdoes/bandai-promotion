<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="f" uri="/WEB-INF/tld/f.tld" %>
<jsp:include page="/WEB-INF/jsp/include/header.jsp" />
<jsp:include page="/WEB-INF/jsp/include/topper.jsp" />
<jsp:include page="/WEB-INF/jsp/include/aside.jsp" />
<jsp:include page="/WEB-INF/jsp/common/sns.jsp" />

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>MBTI PROMOTION </h1>

<button type="button" id="startBtn">START</button>
<!-- 3. 결과보기 버튼 -->
<button type="button" id="resultBtn" onclick="infoReg();">결과보기</button>
<!-- 5. 회원가입 버튼 -->
<button type="button" id="signBtn" onclick="signupCnt();">회원가입</button>

<!-- 6. SNS공유 버튼  -->
<input type="button" value="카카오톡" id="kakaotalk" onclick="snsCnt(kakaotalk);"><br>
<input type="button" value="페이스북" id="facebook" onclick="snsCnt(facebook);"><br>
<input type="button" value="URL" onclick="javascript:copyUrlToClipboard()">


<form name="applicantSubFrm" method="post" >
	<input type="hidden" name="code" value="${model.var.code }"/>	
	<input type="hidden" name="userno" value="${model.var.userno }"/>
	<input type="hidden" name="userid" value="${model.var.userid }"/>
</form>

</body>
</html>

<script>

var f = document.applicantSubFrm;
	code = f.code.value;
	userno = f.userno.value;
	userid = f.userid.value;
	
/* 3. 결과 보기 버튼 클릭 시 참여자 정보 등록 */	
function infoReg(userInfo, resultcode) {
   	$.ajax({
  		type: "POST",
   		dataType: "json",
		url: "../promotion/applicant_reg_ajax.do" ,
		data: {code: userInfo.code, userno: userInfo.userno, userid: userInfo.userid, resultcode: resultcode} ,
		error: function (request, status, error) {
			alert(request.responseText)
		},
		success: function(data, textStatus, xhr) {
	    	if(xhr.status == 200) {
	    		console.log('성공');
	    		/* 이후 진행프로세스 정의하시면 됩니다.  */
	    	}
		}
	});    
}

/* 5. 회원가입 바로가기 버튼 클릭 시 카운트 */
function signupCnt(code) {
   	$.ajax({
   		type: "POST",
   		dataType: "json",
		url: "../promotion/signup_cnt_ajax.do" ,
		data: {code: code} ,
		error: function (request, status, error) {
			alert(request.responseText)
		},
		success: function(data, textStatus, xhr) {
	    	if(xhr.status == 200) {
	    		console.log('성공');
	    		/* 이후 진행프로세스 정의하시면 됩니다.  */
	    	}
		}
	});    
}


/* 5. SNS공유하기 바로가기 버튼 클릭 시 카운트 */
function snsCnt(snsid, resultcode) {
	var sns;
	if(snsid === 'kakaotalk'){
		sns = 'kakaotalk'
	}else if(snsid === 'facebook'){
		sns = 'facebook'
	}

	alert(resultcode);
	
   	$.ajax({
   		type: "POST",
   		dataType: "json",
		url: "../promotion/sns_cnt_ajax.do" ,
		data: {code: code, sns: sns} ,
		error: function (request, status, error) {
			alert(request.responseText)
		},
		success: function(data, textStatus, xhr) {
	    	if(xhr.status == 200) {
	    		switch(sns)
	    		{
	    		case 'facebook':
	    			sendSns('facebook', '/promotion/promotion.do?code=p01&resultcode=' + resultcode)
	    			break;
	    			
	    		case 'kakaotalk':
	    			sendSns('kakaotalk', '/promotion/promotion.do?code=p01&resultcode=' + resultcode)
	    			break;

	    		}
		    	}
			}
		});    
	}

</script>

<jsp:include page="/WEB-INF/jsp/include/footer.jsp" />