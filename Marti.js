function Start() {
    setTimeout(function(){
        alert("If u are using this website with a phone, pls switch to a PC.") //Ich benutzte es nur auf der Memes.html Seite, es ist aber eigentlich für die ganze Seite gedacht, ich wollte es also erst auf der Start Seite haben. Jedoch empfinde ich es als nervig, wenn man jedes mal auf die Startseite geht und diesen Alert bekommt.
    },1000) //delay
}

function showMemes() {
    document.getElementById("Meme").style.display = "block";
    document.getElementById("Button").style.display ="none";
}

var likesPic1 = Number(localStorage.getItem("likesPic1"));
var Upvote = false;
var Downvote = false;

function Upvote1() {
    if (Upvote == false) {
        if (Downvote == false) { //speichert nicht
            newlikesPic1 = likesPic1 += 1;
            localStorage.setItem("likesPic1", newlikesPic1);
            document.getElementById("LikesPic1").innerHTML = likesPic1;
        }
        else { //funktioniert
            newlikesPic1 = likesPic1 += 2;
            localStorage.setItem("likesPic1", newlikesPic1);
            localStorage.getItem("likesPic1");
            document.getElementById("LikesPic1").innerHTML = likesPic1;
        }
        Downvote = false;
    }
    Upvote = true;
}

function Downvote1() {
    if (Downvote == false) {
        if (Upvote == false) { //funktioniert
            newlikesPic1 = likesPic1 -=1;
            localStorage.setItem("likesPic1", newlikesPic1);
            localStorage.getItem("likesPic1");
            document.getElementById("LikesPic1").innerHTML = likesPic1;
        }
        else { //funktioniert
            newlikesPic1 = likesPic1 -= 2;
            localStorage.setItem("likesPic1", newlikesPic1);
            localStorage.getItem("likesPic1");
            document.getElementById("LikesPic1").innerHTML = likesPic1;
        }
        Upvote = false;
    }
    Downvote = true;
}

function Start1() {
    localStorage.getItem("likesPic1");
    document.getElementById("LikesPic1").innerHTML = likesPic1;
}
