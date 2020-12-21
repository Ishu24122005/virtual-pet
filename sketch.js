//Create variables here
var dog,happydog,database,foods,foodstock;
var dogimage1,dogimage2;
function preload()
{
  dogimage1=loadImage("images/dogImg.png")
  dogimage2=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database(); 
  createCanvas(500,500);
  dog=createSprite(250,300,10,10);
  dog.addImage(dogimage1);
  dog.scale=0.5
foodstock=database.ref("food");
foodstock.on("value",readstock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writestock(foods);
  dog.addImage(dogimage2);
}
  drawSprites();
  //add styles here
stroke("black");
textSize(13);
text("putremaning"+foods,170,120)
}
function writestock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })
} 




function readstock(data){
  foods=data.val();
}

