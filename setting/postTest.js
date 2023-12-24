	const fnPost = function() {
		if(confirm("요청을 전송하시겠습니까?")){
			//confirm시, 하단 코드 실행
		console.log("location.origin : " + location.origin);
		var xhr = new XMLHttpRequest();

		xhr.onload = () => {
			if (xhr.status === 200) {
				alert('요청성공 , 리스트 정보' + xhr.responseText);
			}
			else {
				alert('요청실패 , 상태 : ' + xhr.status);
			}
	
		}


		xhr.open('POST', 'http://localhost:8085/post');				
		xhr.setRequestHeader("content-type", "application/json"); 
		
		var targetData = document.getElementById("ctnt");
		console.log("targetData.value : " + targetData.value);
		var postTestData = {
			"userId" : 2,
			"ctnt" : targetData.value
		};
		xhr.send(JSON.stringify(postTestData));
		
		}
	};
	
