var canvas=new fabric.Canvas('mycranberry');
player_x = 10;
 player_y= 10;
  block_image_width = 30;
   block_image_height = 50;
    var player_object= "";
     var block_image_object= "";
      function player_update() { fabric.Image.fromURL("player.png", function(Img) { player_object = Img;
         player_object.scaleToWidth(120);
          player_object.scaleToHeight(140);
           player_object.set({ top:player_y, left:player_x });
            canvas.add(player_object);
         });
        }
        function new_image(get_image) { fabric.Image.fromURL(get_image, function(Img) { block_image_object = Img;
             block_image_object.scaleToWidth(block_image_width);
              block_image_object.scaleToHeight(block_image_height);
               block_image_object.set({ top:player_y, left:player_x });
                canvas.add(block_image_object)});}
                window.addEventListener("keydown", my_keydown);
                 function my_keydown(e) { keyPressed = e.keyCode;
                   console.log(keyPressed);
                    if(e.shiftKey == true && keyPressed == '80')
                     {
                        block_image_width = block_image_width + 9 ;

                        block_image_height = block_image_height + 9;
                      
                        document.getElementById ("CurrentWidth").innerHTML = block_image_width ;
                     
                        document.getElementById ("CurrentHeight").innerHTML = block_image_height;
                     }
                     if(e.shiftKey == true && keyPressed == '77')
                     {
                        block_image_width = block_image_width - 9 ;

                        block_image_height = block_image_height - 9;
                      
                        document.getElementById ("CurrentWidth").innerHTML = block_image_width ;
                     
                        document.getElementById ("CurrentHeight").innerHTML = block_image_height;
                     }
if(keyPressed == '38'){up();}
if(keyPressed == '37'){left();}
if(keyPressed == '39'){right();}
if(keyPressed == '40'){down();}
if (keyPressed == '87'){new_image ('wall.jpg');
}
if (keyPressed == '71'){new_image ('ground.png');
}if (keyPressed == '76'){new_image ('light_green.png');
}if (keyPressed == '84'){new_image ('trunk.jpg');
}if (keyPressed == '82'){new_image ('roof.jpg');
}
if (keyPressed == '68'){new_image ('dark_green.png');
}if (keyPressed == '85'){new_image ('unique.png');
}if (keyPressed == '89'){new_image ('yellow_wall.jpg');
}if (keyPressed == '69'){new_image ('cloud.jpg');

}
function up (){
   if(player_y>=0){
      player_y = player_y - block_image_height;
   canvas.remove(player_object );
   player_update();}}
function down (){
   if(player_y<=500){
      player_y = player_y + block_image_height;
   canvas.remove(player_object);
player_update();}}

function left (){
   if(player_x>=0){
      player_x = player_x - block_image_height;
   canvas.remove(player_object);
player_update();}}

function right (){
   if(player_x <=700.0){
      player_x = player_x + block_image_height;
   canvas.remove(player_object);
player_update();}}}