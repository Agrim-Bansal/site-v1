var s =  ["a"," ", "s", "o", "t"]


window.i = 0;
function anim1() {
    i = window.i;

    var me = document.getElementById("me");
    var s = ["a", " ", "s", "o", "f", "t", "w", "a", "r", "e", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"];

    me.innerHTML += s[i];
    window.i += 1;

    if (window.i == 20) { clearInterval(t1); d1 = setInterval(delay1, 1000); window.i = 19; };


function delay1() {
    clearInterval(d1); dt1 = setInterval(delanim1, 75);
}

}
function delanim1() {
    i = window.i;

    var me = document.getElementById("me");

    me.innerHTML = me.innerHTML.substring(0, me.innerHTML.length - 1);

    window.i--;
    if (window.i == -1) { clearInterval(dt1); t2 = setInterval(anim2, 120); window.i = 0; };

}


function anim2() {
    i = window.i;

    var me = document.getElementById("me");
    var s = ["a", " ", "f", "o", "o", "t", "b", "a", "l", "l", "e", "r",];

    me.innerHTML += s[i];
    window.i += 1;

    if (window.i == 12) {
        clearInterval(t2);
        setTimeout(function () { "" }, 10000);
        d2 = setInterval(delay2, 1000);
        window.i = 11;
    };
   

}

function delay2() {
    clearInterval(d2); dt2 = setInterval(delanim2, 75);

}


function delanim2() {
    i = window.i;

    var me = document.getElementById("me");

    me.innerHTML = me.innerHTML.substring(0, me.innerHTML.length - 1);

    window.i--;
    if (window.i == -1) {
        clearInterval(dt2);
        setTimeout(function () { "" }, 10000);
        t3 = setInterval(anim3, 120);
        window.i = 0;
    };

}



function anim3() {
        i = window.i;

        var me = document.getElementById("me");
        var s = ["a", " ", "t", "i", "n", "k", "e", "r", "e", "r"];

        me.innerHTML += s[i];
        window.i += 1;

    if (window.i == 10) {
        clearInterval(t3);
        setTimeout(function () { "" }, 10000);
        d3 = setInterval(delay3, 1000);
        window.i = 9;
    };
}

function delay3() {
    clearInterval(d3); dt3 = setInterval(delanim3, 75);
}



function delanim3() {
    i = window.i;

    var me = document.getElementById("me");

    me.innerHTML = me.innerHTML.substring(0, me.innerHTML.length - 1);

    window.i--;
    if (window.i == -1) {
        clearInterval(dt3);
        setTimeout(function () { "" }, 10000);
        t1 = setInterval(anim1, 100);
        window.i = 0;
    };

}

t1 = setInterval(anim1, 80);


function delay() {
    var c = document.getElementById("c");
    if (c.style.visibility == "hidden") { c.style.visibility = "visible"; }
    else if (c.style.visibility == "visible") { c.style.visibility = "hidden"; };
}
