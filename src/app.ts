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

/* partial mapped type */

/*
interface Person {
  name: string;
  age: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

function updatePerson(person: Person, prop: MyPartial<Person>): Person {
  return { ...person, ...prop };
}

const person: Person = {
  name: "Todd",
  age: 27
};
const updatedPerson = updatePerson(person, { name: "ABC" });
console.log(updatedPerson);
*/

/* required mapped type */
/*
interface Person {
  name: string;
  age?: number;
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

function printAge(person: MyRequired<Person>) {
  return `${person.name} is ${person.age}`;
}

const person: MyRequired<Person> = {
  name: "Todd",
  age: 27
};

console.log(printAge(person));
*/

/* pick mapped type */
/*
interface Person {
  name: string;
  age: number;
  address: {};
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const person: MyPick<Person, "name" | "age"> = {
  name: "Todd",
  age: 27
};
*/

/* record mapped type */
/*
let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: "js02js9",
  next: "8nlksjsk"
};

// Numbers are coerced to String
dictionary[0] = item;
console.log(dictionary[0]);
*/
