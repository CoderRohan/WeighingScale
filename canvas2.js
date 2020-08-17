var canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

var mouse={
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function(event) {
    mouse.x= event.x;
    mouse.y= event.y;
    console.log(mouse);
    
})




var c= canvas.getContext('2d');
c.fillStyle="blue";
c.fillRect(100,500,300,20);
c.fillStyle="red";
c.fillRect(105,400,290,100);
c.fillStyle="black";
c.fillRect(155,350,20,50);
c.fillRect(325,350,20,50);
c.fillStyle="grey";
c.fillRect(90,330,320,20);

c.fillStyle="white";
c.fillRect(145,430,210,40);
console.log(canvas);

// function weight() {
//     c.clearRect(0,0,500,500);
//     c.fillStyle="blue";
//     c.fillRect(100,500,300,20);
//     c.fillStyle="red";
//     c.fillRect(105,400,290,100);
//     c.fillStyle="black";
//     c.fillRect(155,350,120,50);
//     c.fillRect(325,350,120,50);
//     c.fillStyle="grey";
//     c.fillRect(90,330,320,20);
    
// }





function ScaleDesign(dy){
    // this.saman=saman;
    this.dy=dy;
    this.draw= function(){
        c.fillStyle="blue";
        c.fillRect(100,500,300,20);
        c.fillStyle="red";
        c.fillRect(105,400,290,100);
        c.fillStyle="black";
        c.fillRect(155,350-this.dy,20,50-this.dy);
        c.fillRect(325,350-this.dy,20,50-this.dy);
        c.fillStyle="grey";
        c.fillRect(90,330-this.dy,320,20);

        c.fillStyle="white";
        c.fillRect(145,430,210,40);
    }
    this.update=function(){
        // interactivity
        if (mouse.x>100  && mouse.x<  400  && mouse.y <500  && mouse.y>100) {
            this.dy=20;
        }
        else{
            this.dy=0;
        }
        this.draw(dy);
    }
    }
    var scale1= ScaleDesign(20);
    function animate(){
        requestAnimationFrame(animate);
       // console.log("abcd");
        // //c.clearRect(0,0,innerWidth,innerHeight);  //clear the space
        // for(var i=0;i<circleArray.length;i++){
        //     circleArray[i].update();
        scale1.update();
        
    }
animate();