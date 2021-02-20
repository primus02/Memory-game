(function (){
	var images = [];
	
	//structure for the images
	for(var i = 0; i < 24; i++){
		
		var img = {
            src: "assets/images/" + i + ".jpg",
			id: i%8
		};
		
		//push what I created in the array
		images.push(img);
	}
	
    startGame();

    function startGame(){

     var frontFaces = document.getElementsByClassName("front");
        
        for(var i = 0; i < 24; i++){
			var card = document.querySelector("#card" + i);
			card.style.left = (i % 8 === 0) ? 20 + "px" : (i % 8) * 130 + 10 + "px";
            card.style.top = i < 8 ? 5 + "px" : (i < 16 ? 160 + "px" : 320 + "px");

            card.addEventListener("click",turnCard,false);
            
            frontFaces[i].style.background = "url('"+ images[i].src +"')";
			frontFaces[i].setAttribute("id",images[i].id);
            
		}
	}
function turnCard(){
    var faces = this.getElementsByClassName("face");
    faces[0].classList.toggle("turned");
    faces[1].classList.toggle("turned");

     }

}());