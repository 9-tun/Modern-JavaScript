const result = document.getElementById("result");

let JSONPath = "https://reqres.in/api/products/10";

let xhr = new XMLHttpRequest();
xhr.open("GET", JSONPath);
xhr.send();

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    try {
      let product = JSON.parse(xhr.responseText);

      if (!product.data.name) {
        throw "상품명이 없습니다.";
      } else if (!product.data.year){
        throw "생산년도가 없습니다.";
      }else{
        result.innerHTML = `
        <ul> 
          <li>상품명: ${product.data.name}</li>
          <li>생산년도: ${product.data.year}</li>
        </ul>
        `
      }
    } catch (err) {
      console.error(err);
    }
  }
}




