function func(){
    let obj = Object.create(null);
    obj.apple = "Apple";
      
    for(let key in obj) {
      console.log(key); 
    }
    };
    console.log(func());