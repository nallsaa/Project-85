//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width=75
greencar_height=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5
greencar_y=225

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}

function new_image()
{
    fabric3.Image.fromURL("greencar_image",function(Img){
    greencar_image.scaleToWidth(75);
    greencar_image.scaleToHeight(100);
	greencar_image.set({
        top:greencar_y,
        left:greencar_x
    })
    canvas.add(greencar_image)
})}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height)
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
}
function up()
	{
		
		if(greencar_y>0){
			greencar_y=greencar_y-20
			canvas.remove("greencar_image")
			new_image()
		}
	}

	function down()
	{
		
		 if(greencar_y<400){
			greencar_y=greencar_y+20
			canvas.remove("greencar_image")
			new_image()
	}
}

	function left()
	{
		if(greencar_x >5)
		{
			greencar_x=greencar_x-20
			canvas.remove("greencar_image")
			new_image()
		}
	}

	function right()
	{
		if(greencar_x <=800)
		{
			
			greencar_x=greencar_x+20
			canvas.remove("greencar_image")
			new_image()
		}
	}
