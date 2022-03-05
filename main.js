var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    function new_image(get_image)
    {
        fabric.Image.fromURL(get_image, function(Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_object);
        block_image_object.scaleToHeight(block_image_object);
    block_image_object.set({
    top:0,
    left:0
    });
    canvas.add(block_image_object);
        });
}}

function playSound(){
x.play();
}
