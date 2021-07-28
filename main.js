var canvas= new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(180);
        player_object.scaleToHeight(165);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
     
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true&&keypressed=='80'){
        console.log("p and shift key pressed together");
        block_image_width=block_image_width+5;
        block_image_height=block_image_height+5;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    
    }
    if (e.shiftKey==true&&keypressed=='77'){
        console.log("m and shift key pressed together");
        block_image_width=block_image_width-5;
        block_image_height=block_image_height-5;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    
    }
    if (keypressed=='38'){ 
    up();
    console.log("up=38");
    }
    if (keypressed=='40'){ 
        down();
        console.log("down=40");
    }
      if (keypressed=='37'){ 
        left();
        console.log("left=37");
        }
        if (keypressed=='39'){ 
            right();
            console.log("right=39");
            }
        
        if (keypressed=='87'){
            new_image('wall.jpg');
            console.log("w=87");
        }
        if (keypressed=='71'){
            new_image('ground.png');
            console.log("g=71");
        }
        if (keypressed=='76'){
            new_image('light_green.png');
            console.log("l=76");
        }
        if (keypressed=='82'){
            new_image('roof.jpg');
            console.log("r=82");
        }
        if (keypressed=='84'){
            new_image('trunk.jpg');
            console.log("t=84");
        }
        if (keypressed=='89'){
            new_image('yellow_wall.png');
            console.log("y=89");
        }
        if (keypressed=='68'){
            new_image('dark_green.png');
            console.log("d=68");
        }
        if (keypressed=='85'){
            new_image('unique.png');
            console.log("u=85");
        }
        if (keypressed=='67'){
            new_image('cloud.jpg');
            console.log("c=67");
        }
   }
  
   function up(){
       if (player_y>=0){
           player_y=player_y-block_image_height;
           console.log("block image height= "+block_image_height);
           console.log("When UP arrow is pressed, X="+player_x+",Y="+ player_y);
           canvas.remove(player_object);
           player_update();
       }
   }
   function down(){
    if (player_y<=875){
        player_y=player_y+block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("When DOWN arrow is pressed, X="+player_x+",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("When LEFT arrow is pressed, X="+player_x+",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<=1000){
        player_x=player_x+block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("When RIGHT arrow is pressed, X="+player_x+",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}