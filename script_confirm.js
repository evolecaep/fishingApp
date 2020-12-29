let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let number = document.getElementById("number");
let money = document.getElementById("money");

let _q = 1;
let _m = 10000;
refresh();

plus.addEventListener("click", function(){
  _q+=1;
  refresh();
});

minus.addEventListener("click", function(){
  _q-=1;
  if(_q==0){
    _q=1;
  }
  refresh();
});


function refresh(){
  number.innerText=String(_q);
  money.innerText=String(_q*_m);
}

let next=document.getElementById("next");
next.addEventListener("click", function(){
  location.href = "payment.html";
});

let back=document.getElementById("back");
back.addEventListener("click", function(){
  location.href = "order2.html";
});
