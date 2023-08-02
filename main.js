x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
var apple = "";
var speak_data = "";
var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "I'm listening, SPEAK >:(";
    recognition.start();
}

function preload() {
    apple = loadImage('apple.png');
}

recognition.onresult = function(event) {
    console.log(event);
    to_number = Number(content);
    if(Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "apple time!!";
        draw_apple = "set";
    } else {
        document.getElementById("status").innerHTML = "you're supposed to say a number 😓";
    }
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(center);
}

function draw() {
    if(draw_apple == "set") {
        for (let i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
          }
          document.getElementById("status").innerHTML = to_number + "apple time >:)";
    }

    //if(draw_circle == "set") {
        //radius = Math.floor(Math.random() * 100);
        //circle(x, y, radius);
        //document.getElementById("status").innerHTML = "yum";
        //draw_circle = "";
    //}

    //if(draw_rect == "set") {
        //rect(x, y, 70, 50);
        //document.getElementById("status").innerHTML = "yum";
        //draw_rect = "";
    //}
}