canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "http://www.clker.com/cliparts/q/0/m/g/P/c/red-sports-car-top-view.svg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://carsindoha.com/wp-content/uploads/2016/12/EXTERIOR-car-icon.png";
car2_x = 10;
car2_y = 10;

background_image = "https://postimg.cc/p9D2dqqZ";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    }
    
    function up() {
        if(rover_y >= 0) {
            rover_y = rover_y - 10;
            console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }
    function down() {
        if (rover_y <= 500) {
            rover_y = rover_y + 10;
            console.log("When down arrow is pressed, x = " + rover_x + " y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }
    function left() {
        if (rover_x >= 0) {
            rover_x = rover_x - 10;
            console.log("When left arrow is pressed, x = " + rover_x + " y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }
    function right() {
        if (rover_x <= 700) {
            rover_x = rover_x + 10;
            console.log("When right is pressed, x = " + rover_x + " y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }