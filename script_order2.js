let page=document.getElementById("page");
let part1=document.getElementById("part1");
let part2=document.getElementById("part2");
let part3=document.getElementById("part3");
let part4=document.getElementById("part4");
let reply=document.getElementsByClassName("reply");
let pageNum=0;
let name="제품:"

for (var i=0; i<reply.length; i++){
  reply[i].innerText=name;
}
loadPage();


function loadPage(){
  if (pageNum==0){
    page.innerHTML=part1.innerHTML;
  } else if (pageNum==1){
    page.innerHTML=part2.innerHTML;
  } else if (pageNum==2){
    page.innerHTML=part3.innerHTML;
  } else if (pageNum==3){
    page.innerHTML=part4.innerHTML;
  }
  setBtn();
}




function proceed(){
  pageNum+=1;
  loadPage();
}
function setBtn(){
  let btn_A1=document.getElementById("btn_A1");
  btn_A1.addEventListener("click", function(){
    name+=" A형-";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_A1.addEventListener("click", proceed);


  let btn_B1=document.getElementById("btn_B1");
  btn_B1.addEventListener("click", function(){
    name+=" B형-";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_B1.addEventListener("click", proceed);

  let btn_11=document.getElementById("btn_11");
  btn_11.addEventListener("click", function(){
    name+="1번-";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_11.addEventListener("click", proceed);

  let btn_21=document.getElementById("btn_21");
  btn_21.addEventListener("click", function(){
    name+="2번-";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_21.addEventListener("click", proceed);

  let btn_31=document.getElementById("btn_31");
  btn_31.addEventListener("click", function(){
    name+="3번-";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_31.addEventListener("click", proceed);

  let btn_X1=document.getElementById("btn_X1");
  btn_X1.addEventListener("click", function(){
    name+="X형 ";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_X1.addEventListener("click", proceed);

  let btn_Y1=document.getElementById("btn_Y1");
  btn_Y1.addEventListener("click", function(){
    name+="Y형 ";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_Y1.addEventListener("click", proceed);

  let btn_Z1=document.getElementById("btn_Z1");
  btn_Z1.addEventListener("click", function(){
    name+="Z형 ";
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_Z1.addEventListener("click", proceed);

  let btn_previous=document.getElementById("previous");
  btn_previous.addEventListener("click", function(){
    name=name.substring(0,name.length-3);
    for (var i=0; i<reply.length; i++){
      reply[i].innerText=name;
    }
  });
  btn_previous.addEventListener("click", goPrevious);

  let btn_back=document.getElementById("back");
  btn_back.addEventListener("click", function(){
    location.href = "order1.html";
  });

  let btn_next=document.getElementById("continue");
  btn_next.addEventListener("click", function(){
    location.href = "confirm.html";
  });
}

function goPrevious(){
  pageNum-=1;
  loadPage();
}
