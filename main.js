var canvas=new fabric.Canvas("myCanvas");
s_x=10;
s_y=10;
block_width=30;
block_height=30;
var so="";
var b_image="";
function su() {
    fabric.Image.fromURL("player.png",function (Img){
        so=Img;
        so.scaleToWidth(150);
        so.scaleToHeight(140);
        so.set({
            top:s_y, left:s_x

        });
        canvas.add(so);
    });

    
}
function ni(get_image) {
    fabric.Image.fromURL(get_image,function (Img){
        b_image=Img;
        b_image.scaleToWidth(block_width);
        b_image.scaleToHeight(block_height);
        b_image.set({
            top:s_y, left:s_x

        });
        canvas.add(b_image);
    });}

    window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=='80') {
        console.log("shift and p are pressed together");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
        }
        if (e.shiftKey==true && keypressed=='77') {
            console.log("shift and m are pressed together");
            block_height=block_height-10;
            block_width=block_width-10;
            document.getElementById("Current_width").innerHTML=block_width;
            document.getElementById("Current_height").innerHTML=block_height;
            }
    if (keypressed=='38'){
        up();
        
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }if (keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='65'){
        ni("1.png");
        console.log("a");
    }
    if (keypressed=='66'){
        ni("2.png");
        console.log("b");
    }
    if (keypressed=='67'){
        ni("3.png");
        console.log("c");
    }
    if (keypressed=='68'){
        ni("4.png");
        console.log("d");
    }
    if (keypressed=='69'){
        ni(roof.jpg);
        console.log("e");
    }
    if (keypressed=='70'){
        ni("5.png");
        console.log("f");
    }
    if (keypressed=='71'){
        ni("6.png");
        console.log("g");
    }
    if (keypressed=='72'){
        ni("7.png");
        console.log("h");
    }
    if (keypressed=='73'){
        ni("8.png");
        console.log("i");
    }

if (keypressed=='74'){
    ni("9.png");
    console.log("j");
}
if (keypressed=='75'){
    ni("01.png");
    console.log("k");
}
if (keypressed=='76'){
    ni("02.png");
    console.log("l");
}
if (keypressed=='77'){
    ni("03.png");
    console.log("m");
}
if (keypressed=='78'){
    ni("04.png");
    console.log("n");
}
if (keypressed=='79'){
    ni("05.png");
    console.log("o");
}
if (keypressed=='80'){
    ni("06.png");
    console.log("p");
}
if (keypressed=='81'){
    ni("07.png");
    console.log("q");
}
if (keypressed=='82'){
    ni("08.png");
    console.log("r");
}
if (keypressed=='83'){
    ni("09.png");
    console.log("s");
}
if (keypressed=='90'){
    ni("10.png");
    console.log("z");
}
}



function up(){
    if (s_y >=0){
        s_y=s_y-block_height;
        console.log("when up arrow is pressed,x = "+s_x+"and y = "+s_y);
        console.log("block image height = "+ block_height);
    canvas.remove(so);
    su();
    
    
    }
}
function down(){
    if (s_y <=500){
        s_y=s_y+block_height;
        console.log("when down arrow is pressed,x = "+s_x+"and y = "+s_y);
        console.log("block image height = "+ block_height);
        canvas.remove(so);
        su();

    
    }
}
function left(){
    if (s_x >=0){
        s_x=s_x-block_width;

        console.log("when left arrow is pressed,x = "+s_x+"and y = "+s_y);
        console.log("block image width = "+ block_width);
        canvas.remove(so);
        su();
    }
}
function right(){
    if (s_x <=700){
        s_x=s_x+block_width;
        console.log("when right arrow is pressed,x = "+s_x+"and y = "+s_y);
        console.log("block image width = "+ block_width);
        canvas.remove(so);
        su();
        
    
    }
}

