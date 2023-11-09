window.onload = function(){
	console.log("[window.onload] : [start]" );
	console.log(location.origin);
		$(document).ready(function(){
			$('.send').click(function(){ 
				let sendData = 
				// let sendDataTest = "ctnt="+$('input[ctnt]').val();  
				console.log(sendData);
				$.ajax({
					type:'post',  
					url:'http://localhost:8085', 
					data:sendData, 
					dataType:'json',
					success : function(data){
						$('.result').html(data); 
					},
					error : function(data){
						$('.result').html("failed");
					}
				});
			});
		});

}