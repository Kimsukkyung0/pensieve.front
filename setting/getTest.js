
var xhr = new XMLHttpRequest();

var fnGet = function() {
    
    xhr.open('GET', 'http://localhost:8085/list');
    xhr.onload = () => {
    if (xhr.status === 200 || xhr.status === 201) {
        alert('요청성공 , 리스트 정보' + xhr.responseText);
        
    }
    else {
        alert('요청실패 , 상태 : ' + xhr.status);
    }
}
    xhr.abort();
    xhr.send();
};

// var showDate = function(()=>{

// });


