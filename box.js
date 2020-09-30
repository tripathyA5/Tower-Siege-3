class Block {
    constructor(x, y, width, height){
      var options={
          isStatic:false,

          
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.height=height;
      this.width=width;
    }
  display(){
    push();
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      this.visibilty=5;
      pop();
  }
  score(){
    if(this.visibilty<0&&this.visibilty>-105){
      score++;
    }
  }
  }
  