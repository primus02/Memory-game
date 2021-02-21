(function () {
    var images = [];

    var turnedCards = [];

    //structure for the images
    for (var i = 0; i < 24; i++) {

        var img = {
            src: "assets/images/" + i + ".jpg",
            id: i % 8
        };

        //push what I created in the array
        images.push(img);
    }

    startGame();

    function startGame() {

        turnedCards = [];
        images = randomCards(images);

        var frontFaces = document.getElementsByClassName("front");

        for (var i = 0; i < 24; i++) {
            var card = document.querySelector("#card" + i);
            card.style.left = (i % 8 === 0) ? 20 + "px" : (i % 8) * 130 + 10 + "px";
            card.style.top = i < 8 ? 5 + "px" : (i < 16 ? 160 + "px" : 320 + "px");

            card.addEventListener("click", turnCard, false);

            frontFaces[i].style.background = "url('" + images[i].src + "')";
            frontFaces[i].style.backgroundSize = "cover";
            frontFaces[i].style.backgroundRepeat = "no-repeat";

            frontFaces[i].setAttribute("id", images[i].id);

        }
    }

    function randomCards(oldArray) {

        var newArray = [];

        while (newArray.length !== oldArray.length) {
            var i = Math.floor(Math.random() * oldArray.length);

            if (newArray.indexOf(oldArray[i]) < 0) {
                newArray.push(oldArray[i]);
            }
        }


        return newArray;
    }


    function turnCard() {
        if (turnedCards.length < 2) {
            var faces = this.getElementsByClassName("face");

            if (faces[0].classList.length > 2) {
                return;
            }

            faces[0].classList.toggle("turned");
            faces[1].classList.toggle("turned");

            turnedCards.push(this);
        } else {
            turnedCards[0].childNodes[1].classList.toggle("turned");
            turnedCards[0].childNodes[3].classList.toggle("turned");

            turnedCards[1].childNodes[1].classList.toggle("turned");
            turnedCards[1].childNodes[3].classList.toggle("turned");

            turnedCards = [];
        }


    }

}());


