class Tree {
    constructor(x,y,height,width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,height,width,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("green");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
