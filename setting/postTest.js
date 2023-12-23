window.onload = function(){
	

	console.log("[window.onload] : [start]" );
	console.log(location.origin);
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8085/post');
	xhr.setRequestHeader("content-type", "application/json"); 
	//헤더 값 중 content-type 정의

	const fnPost = function() {
		var targetData = document.getElementById("ctnt");
		console.log("targetData : " + targetData);
		console.log("targetData.value : " + targetData.value);
		var postTestData = {
			"userId" : 2,
			"ctnt" : targetData.value
		}
		if (xhr.status === 200) {
			alert('요청성공 , 리스트 정보' + xhr.responseText);
		}
		else {
			alert('요청실패 , 상태 : ' + xhr.status);
		}

		xhr.send(JSON.stringify(postTestData));
	};
	
	



		// $(document).ready(function(){
		// 	// const Http = new XMLHttpRequest();
		// 	const Url = 'http://localhost:8085/post';
			
		// 	$('.send').click(function(){ 
		// 		if(jsonData!=null){

		// 			var sendJsonData = {
		// 				"userId" : 2,
		// 				"ctnt" : jsonData.value
		// 			}
		// 			console.log(sendJsonData);
		// 			$.ajax({
		// 				type:"GET",  
		// 				url : URL, 
		// 				async:true,
		// 				data:sendJsonData, 
		// 				contentType: "application/json; charset=utf-8",
		// 				dataType:"JSON",
		// 				success : function(data){
		// 					$('.result').html(JSON.stringify(data)); 
							
		// 				},
		// 				error : function(data){
		// 					$('.result').html("failed");
		// 				}
					
		// 			});
				
		// 		}else{console.log("유효한 값이 아닙니다");}
		// 	});
			
		// });

}