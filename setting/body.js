window.onload = function(){
	

	console.log("[window.onload] : [start]" );
	console.log(location.origin);
	var jsonData = document.getElementById("ctnt");
	// const Http = new XMLHttpRequest();

		$(document).ready(function(){
			// const Http = new XMLHttpRequest();
			const Url = 'http://localhost:8085/post';
			
			$('.send').click(function(){ 
				if(jsonData!=null){

					var sendJsonData = {
						"userId" : 2,
						"ctnt" : jsonData.value
					}
					// let sendDataTest = "ctnt="+$('input[ctnt]').val();  
					console.log(sendJsonData);
					$.ajax({
						type:"POST",  
						url : URL, 
						async:true,
						data:sendJsonData, 
						contentType: "application/json; charset=utf-8",
						dataType:"JSON",
						success : function(data){
							$('.result').html(JSON.stringify(data)); 
							
						},
						error : function(data){
							$('.result').html("failed");
						}
					
					});
				
				}else{console.log("유효한 값이 아닙니다");}
			});
			
		});

}