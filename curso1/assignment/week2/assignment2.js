var colors= ["blue", "brown", "green","orange","red", "yellow"];
var ansCorrect=false;
var theColor ="";
var userColor;
userColorInRange =false;
function ask(){
  do {
   userColor = prompt("Estoy pensando en un color de estos:" + colors );
   checkUserColor();
      //checkUserColor();
  } while (ansCorrect === false);
}
getRandomColor();
ask();

//ask();
function getRandomColor(){
  var randomIndex = Math.floor(Math.random()* colors.length) ;
  theColor=colors[randomIndex];
  alert("theColor:" + theColor);
}
function checkUserColor(){
  console.log("userColor:" + userColor);
   for(i = 0; i < colors.length; i++){
     if (userColor===colors[i]){
       console.log("en el if:" + colors[i]);
       userColorInRange = true;
       break;
     }else {
        userColorInRange = false;
     }
   }
   console.log("userColorInRange: " + userColorInRange);
   if(userColorInRange===false){
     alert("sorry tu color no esta en el rango de los elegibles");
   }
   else if (userColor < theColor){
     alert("sorry tu color es menor que el theColor");
   }
   else if (userColor > theColor) {
      alert("sorry tu color es mayor que theColor");
   }
   else if(userColor===theColor){
     myBody=document.getElementsByTagName("body")[0];
     myBody.style.background=theColor;
     ansCorrect = true;
     alert("Adivinaste el color correcto\n" +
           "theColor:" +theColor + "\n" +
           "userColor:" + userColor );
   }


}
