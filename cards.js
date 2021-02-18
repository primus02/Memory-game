(function (){
    startGame();

    function startGame(){
         for (var i = 0; i < 12; i++) {
             var card = document.querySelector("#card" + i);
             
             card.style.left = (i === 0 ||  i === 6) ? 5 + "px" : i % 6 * 165 + 5 + "px";
             card.style.top = i < 6 ? 5 + "px" : 250 + "px";
        
         }
    }
}());