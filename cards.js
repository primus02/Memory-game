(function (){
    startGame();

    function startGame(){
         for (var i = 0; i < 12; i++) {
             var card = document.querySelector("#card" + i);
             
             card.style.left = (i === 0 ||  i === 6) ? 15 + "px" : i % 6 * 180 + 10 + "px";
             card.style.top = i < 6 ? 5 + "px" : 250 + "px";
          

             card.addEventListener("click", turnCard,false);
        
         }
    }
function turnCard(){
    var faces = this.getElementsByClassName("face");
    faces[0].classList.toggle("turned");
    faces[1].classList.toggle("turned");

     }

}());


