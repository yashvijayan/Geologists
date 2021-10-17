class Stone{
 constructor(x,y,w,h)
{
    var abc ={
        restitution: 0.8,
        density:2,
        friction:0.8
    }
 this.yash =Bodies.rectangle(x,y,w,h,abc);
 this.w = w;
 this.h = h;
 World.add(world, this.yash );
 

}

xyz(){
    push();
   // fill("green");
   strokeWeight(3);
			stroke("black");
    
    rect(this.yash.position.x , this.yash.position.y, this. w, this.h);

    pop();
}

}