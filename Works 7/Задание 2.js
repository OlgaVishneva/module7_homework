function name(obj,str) {
    obj = {
      a : 3,
      b : 5
    }
    console.log('a' in obj);
    console.log('b' in obj);
    console.log('c' in obj);
  }
  name(1,'stroka');
  