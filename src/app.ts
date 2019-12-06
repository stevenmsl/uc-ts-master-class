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

/* typeof type guard */
/*
class Song {
  constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
  if (typeof item.duration === "string") {
    return item.duration;
  }
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;
  return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(
  new Song("Wonderful Wonderful", "05:31")
);
console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(
  new Song("Wonderful Wonderful", 330000)
);
console.log(songDurationFromMS);
*/

/* instanceof type guard */
/*
class Foo {
  bar() {}
}
const bar = new Foo();
console.log(bar instanceof Foo); //true
console.log(Object.getPrototypeOf(bar) === Foo.prototype); //true

class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

function getItemName(item: Song | Playlist) {
  if (item instanceof Song) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song("Wonderful Wonderful", 300000));
console.log("Song name:", songName);

const playlistName = getItemName(
  new Playlist("The Best Songs", [new Song("The Man", 300000)])
);
console.log("Playlist name:", playlistName);
*/

/* user defined type guard */
/*
class Song {
  constructor(public title: string, public duration: number) {}
}
class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return item instanceof Song;
}

function getItemName(item: Song | Playlist) {
  if (isSong(item)) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song("Wonderful Wonderful", 300000));
console.log("Song name:", songName);

const playlistName = getItemName(
  new Playlist("The Best Songs", [new Song("The Man", 300000)])
);
console.log("Playlist name:", playlistName);
*/

/* in operator literal type guard */
/*
class Song {
  kind: "song" = "song";
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: "playlist" = "playlist";
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return "title" in item;
}

function getItemName(item: Song | Playlist) {
  // if (isSong(item)) {
  if (item.kind === "song") {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song("Wonderful Wonderful", 300000));
console.log("Song name:", songName);

const playlistName = getItemName(
  new Playlist("The Best Songs", [new Song("The Man", 300000)])
);
console.log("Playlist name:", playlistName);

/* intersection types */
/*
interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvc: string;
}

interface PayPal {
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
type CheckoutABC = Order & { name: string };
const order: Order = {
  id: "xj28s",
  amount: 100,
  currency: "USD"
};

const orderCard: CheckoutCard = {
  ...order,
  card: "1000 2000 3000 4000",
  cvc: "123"
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  email: "abc@def.com"
};

const assigned = Object.assign({}, order, orderCard);
console.log(assigned);
*/

/* discriminated union types */

interface Order {
  id: string;
  amount: number;
  currency: string;
}
interface Stripe {
  type: "stripe"; //literal type
  card: string;
  cvc: string;
}
interface PayPal {
  type: "paypal";
  email: string;
}
type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;

const order: Order = {
  id: "xj28s",
  amount: 100,
  currency: "USD"
};

const orderCard: CheckoutCard = {
  ...order,
  type: "stripe",
  card: "1000 2000 3000 4000",
  cvc: "123"
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  type: "paypal",
  email: "abc@def.com"
};

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
  if (payload.type === "stripe") {
    console.log(payload.card, payload.cvc);
  }
  if (payload.type === "paypal") {
    console.log(payload.email);
  }
}

checkout(orderCard);
checkout(orderPayPal);
