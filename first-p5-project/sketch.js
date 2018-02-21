/*function setup(){

    createCanvas(800,600);
    background(255,13,255);

stroke(255);
    fill(100);
 rect(250,200,200,10);
 fill(255,0,0);
 ellipse(250,50,100,100);
 stroke(0,255,0);
 ellipse(450,50,100,100);
 stroke(0,255,0);
 
 }
*/

var radius,r;

function setup(){
    createCanvas(500,500);
    background(255);
radius=0;

}

function draw(){
    radius++; // this is increasing by 1
    fill(255,208,38)//colour
    if(radius<200)// if the radius is less than 200
    ellipse(250,250,radius,)//the circle will increase in size

}
else if(radius>=300){
    background(255)
    ellipse(150,150,r-radius);
    if (radius>=600){
        radius=0
    }
}


