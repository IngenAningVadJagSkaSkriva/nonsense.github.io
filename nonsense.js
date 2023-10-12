function RB(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var word = [
    ["attractive","agreeable","angry","big","bald","ambitious","bewildered","colossal","beautiful","fat","skinny","silly","small","short","chubby"], //adjective
    ["people","history","way","art","world","information","map","family","health","computer","kiss","knowledge","friend","land","approval"], //noun
    ["accept","accuse","achieve","blow","communicate","exist","go","imagine","generate","burn","destroy","drinks","eat","kill","behave"], //verb
    ["fatally","accidentally","anxiously","hungrily","often","unnaturally","silently","soon","painfully","too","greedily","hard","rapidly","quickly","poorly"], //adverb
    ["me","us","we","he","mine","myself","I","my","your","our","everyone","no one","somewhat","nobody","such"] //pronouns
]
var cool = 100;
var kool = 0;
var localword = [[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[],[]]];
for(let x = 0; x < 10; x++) {
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 15; j++) {
        kool++;
        localword[x][i][j] = kool;
    }
}
}
var save = function() {
    let saveload = prompt("what load to save in? some number between 0 and 9");
    if(confirm("This load name is " + localStorage.getItem(saveload) + ", do you want to change this load name?")) {
        localStorage.setItem(saveload,prompt("NEW NAME"));
    }
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 15; j++) {
            localStorage.setItem(localword[saveload][i][j],word[i][j]);
        }
    }
}
var load = function() {
    let saveload = prompt("what load to load? some number between 0 and 9");
    if(confirm("This load name is " + localStorage.getItem(saveload) + ", do you want to change this load name?")) {
        localStorage.setItem(saveload,prompt("NEW NAME"));
    }
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 15; j++) {
            word[i][j] = localStorage.getItem(localword[saveload][i][j]);
        }
    }
    list();
}
var list = function() {
    document.open();
    for(let i = 0; i < 5; i++) {
        switch(i) {
            case 0:
                document.write("<br><br>","ADJECTIVE: DESCRIBE WORD:","<br><br>");
            break;
            case 1:
                document.write("<br><br>","NOUN: NAME OF A THING OR PERSON:","<br><br>");
            break;
            case 2:
                document.write("<br><br>","VERB: ACTION WORD:","<br><br>");
            break;
            case 3:
                document.write("<br><br>","ADVERB: DESCRIBES A VERB OR ADJECTIVE OR ADVERB:","<br><br>");
            break;
            case 4:
                document.write("<br><br>","PRONOUNS: REFER TO SOMETHING OR SOMEONE EXAMPLE: it, he:","<br><br>");
        }
        for(let j = 0; j < 15; j++) {
            document.write("X"+j+"Y"+i+" ", word[i][j], "<br>");
        }
        document.write('<br><br><strong onclick="editlist()">CLICK ME TO EDIT LIST</strong>');
    }
    document.write('<br><br><strong onclick="nonsense()">CLICK ME TO FINISH</strong><br><br><strong onclick="save()">CLICK ME TO SAVE THIS WORDLIST</strong><br><br><strong onclick="load()">CLICK ME TO LOAD</strong><br>');
};
var editlist = function() {
    let x = prompt("TYPE THE X COORDINATE");
    let y = prompt("TYPE THE Y COORDINATE");
    let change = prompt(word[y][x] + " IS THE WORD, WHAT DO YOU WANT TO CHANGE IT TO?");
    if(change == null) change = word[y][x];
    word[y][x] = change;
    list();
}
var rng1 = RB(0,4);
var rng2 = RB(0,14);
var rng3 = RB(0,2);
var x = 0;

var nonsense = function() {
    var c = prompt("how many words?");
var kMax = prompt("how many word between every chapter?");
var name = prompt("What name will this text have?");
if(c == null || kMax == null || name == null) return nonsense();
var kC = 0;
var k = 0;
var WPL = 10;
var WPLC = 0;
alert("A window will be open that the text will be written into! DONT CLOSE IT AND THE WINDOW MAY BE EMPTY FOR SOME TIME IF THE TEXT IS LOADING!");
var w = window.open('','','HEIGHT=' + (screen.height / 2) + ",WIDTH=" + (screen.width / 2));
w.moveTo((screen.width - w.outerWidth),(screen.height - w.outerHeight));
document.title = "generating......"
for(let i = 0; i < c; i++) {
    rng2 = RB(0,14);
    rng3 = RB(0,2);
    k++;
    WPLC++;
    if(k >= kMax) {
        kC++;
        k = 0;
        w.document.write("<br><br>", ("CHAPTER " + kC + ": " + word[RB(0,4)][RB(0,14)] + " " + word[RB(0,4)][RB(0,14)]), "<br><br>");
    } else if(WPLC >= WPL) {
        WPLC = 0;
        w.document.write("<br>");
    }

    w.document.write(word[rng1][rng2], " ");

    switch(rng1) {
        case 0:
            if(rng3 == 1) {
                rng1 = 1;
            } else if(rng3 == 2) {
                rng1 = 4;
            } else {
                rng1 = 3;
            }
        break;
        case 1:
            rng1 = 2;
        break;
        case 2:
            if(rng3 == 1) {
                rng1 = 3;
            } else {
                rng1 = 1;
            }
        break;
        case 3:
            if(rng3 == 1) {
                rng1 = 4;
            } else if(rng3 == 0) {
                rng1 = 1;
            } else {
                rng1 = 0;
            }
        break;
        case 4:
            if(rng3 == 1) {
                rng1 = 1;
            } else if(rng3 == 0) {
                rng1 = 0;
            } else {
                rng1 = 2;
            }
    }
}
document.title = "loading.....";
w.document.title = name;
}
alert("GITHUB PROFILE IS: https://github.com/IngenAningVadJagSkaSkriva");
if(confirm("do you want to edit the wordlist?")) {
    list();
} else {
    nonsense();
    document.write('<strong onclick="list()">CLICK ME TO EDIT WORDLIST OR TYPE ANOTHER BOOK IF THE BOOK IS FINISHED</strong>')
} //vad tycker du om min kod?
