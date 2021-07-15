var mydiv = document.getElementById("game");
var myh2 = document.getElementById("text");
var scoretext = document.getElementById("score");
var divstyle = document.getElementById("stylescore");
var buttonplayin = document.getElementById("but");
var score = 0;
var timer = 60;
var timeval = document.getElementById("timer");
var timevalues = timeval.value;
scoretext.innerHTML =  score;
var flag = 0;
var i = 0;
var rightwords = ["road", "walk", "computer", "car", "world", "write", "run", "since", "language", "answer"];
var wrongwords = ["odar", "kalw", "cromtuper", "rca", "dowlr", "tewir", "urn", "nices", "gangulea", "arwens"];

buttonplayin.addEventListener("click", startplaying);
function startplaying() {
    flag++;
    buttonplayin.innerHTML="Enter";
    myh2.innerHTML = wrongwords[i];
    var inputvalue = document.getElementById("inp");
    if (i < wrongwords.length) {
        if (inputvalue.value == rightwords[i - 1]) {
            score++;
            scoretext.innerHTML = score;
        }
        i++;


    }
    else {


        if(wrongwords[i]==undefined)
        {
            myh2.innerHTML = "End";


        }
        var cover = document.createElement("test");
        cover.id = "Success";
        var h1victory = document.createElement("h1");
        var btn = document.createElement("button");
        btn.setAttribute("onclick", "location.reload()")
        btn.textContent = "Play Again";
        h1victory.innerHTML = "Your score " + score;
        document.body.appendChild(cover);
        cover.appendChild(h1victory);
        cover.appendChild(btn);
        clearInterval(timer);


    }
    inputvalue.value = "";

    if (flag == 1) {
        var timerfn = setInterval(function () {
            timeval.innerHTML =  timer;
            timer--;

            if (timer == 0) {
                clearInterval(timerfn);


                var cover = document.createElement("test");
                cover.id = "Success";
                var h1victory = document.createElement("h1");
                var btn = document.createElement("button");
                btn.setAttribute("onclick", "location.reload()")
                btn.textContent = "Play Again";
                h1victory.innerHTML = " Time out your score: " + score;
                document.body.appendChild(cover);
                cover.appendChild(h1victory);
                cover.appendChild(btn);
                clearInterval(Timer);
            }

            if (i == wrongwords.length) {

                clearInterval(timerfn);


            }

        }, 1000)


    }

}



