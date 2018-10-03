

function animate(a,img,left,right,lis){
var i=0;
 function move(){
    img[i%9].style.display="none";
    lis[i%9].style.background="beige"
    i++;
    img[i%9].style.display="block";
    lis[i%9].style.background="red"
}
 var timer= setInterval(move,1000);
 a.onmouseover=function(){
     clearInterval(timer);
 }
 a.onmouseout=function(){
    timer= setInterval(move,1000);
 }
 left.onclick=function(){
    img[i%9].style.display="none";
    lis[i%9].style.background="beige"
    i--;
    if(i<0){
        i=8;
    }
    img[i%9].style.display="block";
    lis[i%9].style.background="red"
 }
 right.onclick=function(){
      move();
 }
 
// console.log(lis.length);
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
        for(var k=0;k<9;k++){
            img[k].style.display="none";
            lis[k].style.backgroundColor="beige";
        }
        img[this.index].style.display="block"
        this.style.backgroundColor='red';
        i=this.index;
        clearInterval(timer);
        setTimeout(move,1000);
    }
}
}