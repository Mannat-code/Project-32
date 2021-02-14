class Box {
  constructor(x,y,width,height) {
    var options = {
      istatic : false
     
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }

    score(){
    if (this.Visiblity < 0 && this.Visiblity >=105){
      score++;
    }
  }
  display(){
    //console.log(this.body.speed);

    var pos =this.body.position;
 
   rectMode(CENTER);
    

    if(this.body.speed <  9){
   
      rect(pos.x, pos.y, this.width, this.height);
     }
     else{
  
       World.remove(world, this.body);
    
       
     }
     
   
  
  

  } 
};
