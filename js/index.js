var x = ""; //Math.floor(Math.random() * 100) + 1;
// console.log(x);
var versuch = "";
var maxVersuch = "";
var spieler = {};
var name = "";
var arrayText = document.getElementById("versuche");

function ergebnis() {
    var y = document.getElementById("raten").value;
    y = parseInt(y); // String zur Zahl
    var ms = document.getElementById("ms");
    var foto = document.getElementById("foto");
    if (y === "" || y < 1 || y === "0" || isNaN(y)) {
        ms.innerHTML = "<span class='col-md-4 text-danger fs-4 mt-4 border border-danger p-3 px-5'>أكتب ارقام فقط لا غير</span>";
        // alert("Passt nicht");
    } else {
        versuch++;
        if (x === y) {
            erstelleRunde()
            ergebnisSchleife();
            ms.innerHTML = "<div class='fs-4'> <span class=' fs-1 text-success'> مبروك!</span> <br> شاطر حزرت الرقم واحتجت <span class='text-danger'>" + versuch + "</span> من المحاولات</div>";
            foto.innerHTML = " <br> <img src='img/gewonnen.png' alt='Girl in a jacket' width='300' height='auto'> ";

            // "Richtig! Du hast die richtige Zahl in " + versuch + " Versuchen erraten";
            neuButton();
            buttonClassA(0)
            versuch = 0;
            namespieler.innerHTML = "";
            // document.body.style.backgroundImage = "url('img/gewonnen.jpg')";
            // document.body.style.backgroundRepeat = "no-repeat";
        } else if (x < y) {
            ms.innerHTML = "<div class='fs-4'>الرقم المطلوب <span class='text-info'> أصغر </span>  من رقمك! <br> حاول مرة أخرى. لسا عندك <span class='text-danger'>" + (maxVersuch - versuch) + "</span> محاولات</div>";
            //"Hallo <span class='text-dark'>" + name + "</span> viel Glück"

            // "<div class='bg-light'> +

            // </div>" +
            // "Die gesuchte Zahl ist kleiner als dein Wert! Du hast noch " +
            //     (maxVersuch - versuch) + " Versuche übrig.";
            pruefeVersuche();
        } else {
            ms.innerHTML = "<div class='fs-4'>الرقم المطلوب <span class='text-warning'> أكبر </span>  من رقمك! <br> حاول مرة أخرى. لسا عندك <span class='text-danger'>" + (maxVersuch - versuch) + "</span> محاولات</div>";

            // "Die gesuchte Zahl ist größer als dein Wert! Du hast noch " +
            (maxVersuch - versuch) + " Versuche übrig.";
            pruefeVersuche();
        }
    }
}

function erstelleRunde() {
    var runde = {
        versuche: versuch,
        zahl: x
    };
    spieler[name].runden.push(runde);
}

function pruefeVersuche() {
    if (versuch === maxVersuch) {
        erstelleRunde()
        buttonClassA(0);
        ms.innerHTML = "<div class='fs-2'>يا <span class='text-danger'> خسران </span> <br> ماظل عندك محاولات. الرقم كان <span class='text-success' >" + x + "</span> </div>";
        //neuButtonSpeichern();
        neuButton();
        ergebnisSchleife();
        namespieler.innerHTML = "";
        // document.body.style.backgroundImage = "url('img/verloren.jpg')";
        foto.innerHTML = " <br> <img src='img/verloren.png' alt='Girl in a jacket' width='200' height='auto'> ";

    }
}

function neuButton() {
    document.getElementById("neuspiel").style.display = "inline-block";
    document.getElementById("weiterspielen").style.display = "inline-block";
}

function neuSpiel() {
    document.getElementById("neuspiel").style.display = "none";
    document.getElementById("weiterspielen").style.display = "none";
    document.getElementById("raten").value = "";
    document.getElementById("name").value = "";
    ms.innerHTML = "";
    versuche.innerHTML = "";
    namespieler.innerHTML = "";
    neuButtonSpeichern();
    foto.innerHTML = "";
    // document.body.style.backgroundImage = "";
    //buttonKeineAhnung(1);
}

function weiterSpielen() {
    document.getElementById("neuspiel").style.display = "none";
    document.getElementById("weiterspielen").style.display = "none";
    document.getElementById("raten").value = "";
    ms.innerHTML = "";
    //neuButtonSpeichern();
    buttonKeineAhnung(1);
    foto.innerHTML = "";
}

function ergebnisSchleife() {
    var text = "";
    for (var i = 0; i < spieler[name].runden.length; i++) {
        // text += "<br> <span class='text-danger'>" + name + "</span>! الرقم هو  <span class='text-success'>" + spieler[name]["runden"][i].zahl + "</span>  . و انت أحتجت إلى " + spieler[name]["runden"][i].versuche + " محاولة.";
        text += "الرقم هو  <span class='text-success'>" + spieler[name]["runden"][i].zahl + "</span>  . وانت أحتجت إلى <span class='text-danger'>" + spieler[name]["runden"][i].versuche + "</span> من المحاولات <br>";
    }
    arrayText.innerHTML = "<hr>" + text + "<br>";
}

function hundert() {
    x = Math.floor(Math.random() * 100) + 1;
    versuch = 0;
    maxVersuch = 5;
    buttonKeineAhnung(0);
    buttonClassA(1);
    ms.innerHTML = "";
    // document.body.style.backgroundImage = "url('img/100.jpg')";
    // document.body.style.backgroundRepeat = "no-repeat";
}

function tausend() {
    x = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    console.log(x);
    versuch = 0;
    maxVersuch = 10;
    buttonKeineAhnung(0);
    buttonClassA(1);
    ms.innerHTML = "";
    // document.body.style.backgroundImage = "url('img/1000.jpg')";
    // document.body.style.backgroundRepeat = "no-repeat";

}

function zehnTausend() {
    x = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    versuch = 0;
    maxVersuch = 15;
    buttonKeineAhnung(0);
    buttonClassA(1);
    ms.innerHTML = "";
    // document.body.style.backgroundImage = "url('img/10000.jpg')";
    // document.body.style.backgroundRepeat = "no-repeat";
}

function buttonKeineAhnung(zeigenClassE) {
    var elemente = document.getElementsByClassName("e");
    for (var i = 0; i < elemente.length; i++) {
        if (zeigenClassE === 1) {
            elemente[i].style.display = "inline-block";
        } else {
            elemente[i].style.display = "none";
        }
    }
}

function buttonClassA(zeigenClassA) {
    var elemente = document.getElementsByClassName("a");
    for (var i = 0; i < elemente.length; i++) {
        if (zeigenClassA === 1) {
            elemente[i].style.display = "inline-block";
        } else {
            elemente[i].style.display = "none";
        }
    }
}

function neuButtonSpeichern() {
    document.getElementById("speicher").style.display = "inline-block";
    document.getElementById("name").style.display = "inline-block";
}

function speichern() {
    var Name = document.getElementById("name").value;
    if (Name === "") {
        // alert("Passt nicht");
        ms.innerHTML = "<span class='col-md-4 text-danger fs-4 mt-4 border border-danger p-3 px-5'>أكتب أسمك بلا غش. شايفك </span>";
        // ms.innerHTML = "أكتب أسمك بلا غش. شايفك";

        // "أكتب أسمك بلا غش. شايفك"
    } else {
        document.getElementById("speicher").style.display = "none";
        document.getElementById("name").style.display = "none";
        name = document.getElementById("name").value;
        if (spieler.hasOwnProperty(name) === false) {
            spieler[name] = {
                runden: []
            };
        };
        buttonKeineAhnung(1);
        nameSpieler();
        ms.innerHTML = "";
    };
}

function nameSpieler() {
    document.getElementById("namespieler").innerHTML = "<span class='text-dark'>" + name + "</span> حظا سعيدا";
}

var input = document.getElementById("name");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("speicher").click();
    }
});
var input2 = document.getElementById("raten");
input2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("disbutten").click();
    }
});