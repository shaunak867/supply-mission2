class Box {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.width = 200
      this.height = 100
      this.thickness = 20
      this.bottombody = Bodies.rectangle(x,y,this.width,this.thickness,options);
      this.leftbody = Bodies.rectangle(x-100,y-50,this.thickness,this.height,options);
      this.rightbody = Bodies.rectangle(x+100,y-50,this.thickness,this.height,options);
      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
    }
    display(){
      var pos1 =this.bottombody.position;
      var pos2 =this.leftbody.position;
      var pos3 =this.rightbody.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos1.x, pos1.y, this.width, this.thickness);
      rect(pos2.x, pos2.y, this.thickness, this.height);
      rect(pos3.x, pos3.y, this.thickness, this.height);
    }
  };
