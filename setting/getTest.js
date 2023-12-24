

var fnGet = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8085/post');
    xhr.onload = () => {
    if (xhr.status === 200 || xhr.status === 201) {
        let result;
        alert('요청성공 , 리스트 정보' + xhr.responseText);
        result = JSON.parse(xhr.response);
        console.log("result : " + result);        
        showData(result);
    }
    else {
        alert('요청실패 , 상태 : ' + xhr.status);
    }
}
    xhr.abort();
    xhr.send();
};

function showData(result){
    let resultArea = document.getElementsByClassName('result');
    console.log("resultArea : " + resultArea);
    var keys = Object.keys(result)
    var values = Object.values(result)
        values.forEach((va,idx)=>{
        let tmp = document.createElement('p');
        tmp.setAttribute('class', 'result '+keys[idx]);
        tmp.innerHTML = "result." + keys[idx] +" : "+ va;

        // tmp.innerHTML = "result.hits : " + result.hits;
        // tmp.innerHTML = "result.likes : " + result.likes;
        // tmp.innerHTML = "result.img : " + result.img;
        resultArea[0].appendChild(tmp);
    });
}
