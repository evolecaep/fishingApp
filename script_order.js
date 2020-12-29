let btn_previous;
let btn_next;


btn_previous=document.getElementById("previous");
btn_previous.addEventListener("click", goToPrevious);

btn_next=document.getElementById("next");
btn_next.addEventListener("click", goToNext);














function goToPrevious (){
  location.href = "index.html";
}

function goToNext (){
  location.href = "order2.html";
}
