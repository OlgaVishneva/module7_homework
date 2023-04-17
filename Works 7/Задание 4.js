function Electrical(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  Electrical.prototype.getPlugged = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  Electrical.prototype.getPluggedIn = function() {
    return this.isPlugged ? this.power : 0;
  }
  
  const lamp = new Electrical('lamp', 60);
  const computer = new Electrical('computer', 80);
    
  console.log(lamp.getPluggedIn() + computer.getPluggedIn());
  
  lamp.getPlugged();
  console.log(lamp.getPluggedIn() + computer.getPluggedIn());
  
  computer.getPlugged();
  console.log(lamp.getPluggedIn() + computer.getPluggedIn()); 
  