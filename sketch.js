let x = [];
let y = [];
let c =[];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 300; i++){
        x[i] = random(0, width);
        y[i] = random(-1000, height); 
        c[i] = random(85, 170);
    }
}

function draw() {
    background(80);

    for (let i = 0; i < y.length; i++){
        y[i] += 15;
        stroke(c[i]);
        line(x[i], y[i], x[i], y[i]+40);
        
        if(y[i] > mouseY && x[i] < mouseX + 150 && x[i] > mouseX - 150){
          c[i] = 80
        }
        
        if(y[i] > height){
          y[i] = y[i] - 1000;
          c[i] = random(85, 170);
        }  
    
    }

    translate(mouseX, mouseY);
    noStroke();
    fill(250, 150, 10);
    triangle(0, 0, -150, 130, 150, 130);
    
}





// let y = 0;
// let y2 = -100;

// function setup(){
//     createCanvas(500, 500);
//     stroke(150);
// }

// function draw(){
//     background(100);
//     y = y + 5
//     y2 += 5
//     line (50, y, 50, y+30);
//     line (80, y2, 80, y2+30);
// }
