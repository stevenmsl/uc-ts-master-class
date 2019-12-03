/* lexical scope arrow functions */
/*
class MyClass {
  myMethod() {
    const foo = 123;
    console.log("1", this); //MyClass
    setTimeout(() => {
      //Arrow functions would not
      //introduce a lexical scope
      console.log("2", this); //MyClass
    }, 0);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
*/
