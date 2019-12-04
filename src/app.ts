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

/* typeof type query */

/*
const person = {
  name: "Todd",
  age: 27
};

type Person = typeof person;

const anotherPerson: Person = {
  name: "John",
  age: 30
};
*/

/* keyof type query */
/*
const person = {
  name: "Todd",
  age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person; //union type
type PersonTypes = Person[PersonKeys];
const anotherPerson: Person = {
  name: "John",
  age: 30
};
*/

/* keyof lookup generics */
/*
const person = {
  name: "Todd",
  age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "name");
const personAge = getProperty(person, "age");
*/

/* readonly mapped type */

/*
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Todd",
  age: 27
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function freeze<T>(obj: T): MyReadonly<T> {
  //Readonly and MyReadonly are considered as the same type
  return Object.freeze(obj);
}

const newPerson = freeze(person);
//Not allowed as all properties are now read-only
//newPerson.name = "Joe";

*/
