
$('.send').click(function(){
    $.ajax(
    {
        url:"http://localhost:8085/list",
        method:"GET",
        dataType:"json"
    }
) 



.done(function(json){
    $(".result").text(json.nickNm).appendTo(".result");
})

.fail(function(xhr, status, errorThrown) {
    $(".result").html("오류가 발생했다.<br>")
    .append("오류명: " + errorThrown + "<br>")
    .append("상태: " + status);
})

.always(function(xhr, status) {
    $(".result").html("아무튼 요청이 완료되었습니다!");
});

});





