var rand = Math.floor(Math.random() * 100 + 1);
var hint=document.getElementById("hint");
var vic= new Audio('images/vic.m4a');

hint.innerHTML="Try To Gusse The Number Its Between 0 : 100";
var Try=0;
 
 var cover = document.createElement("test");
 cover.id = "Success";
 var h1victory = document.createElement("h1");
 var btn = document.createElement("button");
 btn.setAttribute("onclick", "location.reload()")
 btn.textContent = "Play Again";

document.getElementById("submitguess").onclick = function(){

   Try++;
var val = document.getElementById("guessvalue").value;
if(val == rand)
{    
   h1victory.innerHTML = "The Number IS ( "+rand +" ) You Got It In ( "+Try+" ) Tries" ;
   document.body.appendChild(cover);
   cover.appendChild(h1victory);
   cover.appendChild(btn);
   if(Try==5){
  h1victory.innerHTML = "Excellent you guess the number( "+rand +" )  In only ( "+Try+" ) Tries" ;

      document.body.appendChild(cover);
      cover.appendChild(h1victory);
      cover.appendChild(btn);
      vic.play();
    


   }
}
else if(val > rand)  
{    
   hint.innerHTML="TRY A SMALLER NUMBER";
   
}
else
{
   hint.innerHTML="TRY A GREATER NUMBER";
  
}
}


