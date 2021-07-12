var img=[
'images/1.jpg',
'images/2.jpg',
'images/3.jpg',
'images/4.jpg',
'images/5.jpg',
'images/6.jpg',
'images/7.jpg',
'images/8.jpg',
'images/1.jpg',
'images/2.jpg',
'images/3.jpg',
'images/4.jpg',
'images/5.jpg',
'images/6.jpg',
'images/7.jpg',
'images/8.jpg',
]
   /*...................random.............*/

img.sort(function (){
  return 0.5 - Math.random();
})

/*.........................play voice...............*/
var correct= new Audio('images/C.m4a');
var vic= new Audio('images/vic.m4a');
var rong= new Audio('images/fail.m4a');
/*................................repeat imgs............................*/
  var pg=document.getElementById('main');

  for( let i=0;i<img.length;i++){
     pg.innerHTML +='<div><img src="'+img[i]+'"></div>';
  }

var Divsimg=document.getElementsByTagName('div');
var flag=true;/*............check just 2img open................*/
var divsarr=[];
var counter=0;
function choose2divs(){
  if(flag){
  this.firstChild.style.opacity='1';/*..........show one div.............*/
    if(divsarr.length==0)  /*.................choose 2 divs................*/
    {
      divsarr[0]=this;
    }

    else if(divsarr.length==1)

    {
      divsarr[1]=this;
    }
    if(divsarr.length==2)
    {

      flag=false;

      setTimeout(check,1000)
    
    }
  }else{

    return ;

  }


}

for( let i=0;i<Divsimg.length;i++){

  Divsimg[i].addEventListener('click',choose2divs)


}


/*.....................function check..............*/
function  check(){
  if(divsarr[0].firstChild.getAttribute('src')==
  divsarr[1].firstChild.getAttribute('src')){
   correct.play()
   counter++;
if(counter==8)
{
  vic.play();
  var cover=document.createElement("test");
cover.id="Success";
var h1victory=document.createElement("h1");

/* var btn=document.createElement("button");   */
var btn=document.createElement("button");
btn.setAttribute("onclick","location.reload()")
btn.textContent="Play Again";
h1victory.innerHTML="||| Victory |||";
document.body.appendChild(cover);
cover.appendChild(h1victory);
cover.appendChild(btn);
clearInterval(Timer);
clearTimeout(timout);

}

  }

  else{

    divsarr[0].firstChild.style.opacity=0;
    divsarr[1].firstChild.style.opacity=0;
    rong.play()


  }

  divsarr=[];
  flag=true;


}

var timout=setTimeout(function(){
  for( let i=0;i<Divsimg.length;i++){
    Divsimg[i].removeEventListener('click',  choose2divs); 
       }
       var cover=document.createElement("test");
cover.id="Success";
var h1victory=document.createElement("h1");
       var btn=document.createElement("button");
       btn.setAttribute("onclick","location.reload()")
       btn.textContent="Play Again";
       h1victory.innerHTML="Game Over";
       document.body.appendChild(cover);
       cover.appendChild(h1victory);
       cover.appendChild(btn);
       
  
  },50000);



  var timesec =50;
var Timer = setInterval(function(){
  if(timesec <= 0){
    clearInterval(Timer);
    document.getElementById("Game").innerHTML = "Game over";

  } else {
    document.getElementById("Game").innerHTML = timesec + " second";
  }
  timesec -= 1;
}, 1000)



