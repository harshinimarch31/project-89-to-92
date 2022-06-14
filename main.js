canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouse_event="empty";
var last_position_of_x;
var last_position_of_y;
var colour="black";
var width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

}

function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouse_event=="mousedown"){
        console.log("Current position of x and y coordinates = ")
        console.log("x = " + current_position_of_mouse_x  + "y = " +
        current_position_of_mouse_y)
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0,
            2 * Math.PI);
            ctx.stroke();

        
    }
    
}


