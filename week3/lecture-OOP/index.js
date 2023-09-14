// Constructor functions
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old`);
//   };
// }

// const kat = new Person('Kat', 28);

// console.log(kat);
// kat.sayHi();

// Classes

// class Videogame {
//   #title;
//   #createdBy;
//   #genre = [];

//   constructor(title, createdBy) {
//     this.#title = title;
//     this.#createdBy = createdBy;
//     // this.#genre = [];
//     // this.addGenre = function (newGenre) {
//     //   this.genre.push(newGenre);
//     //   return this.genre;
//     // };
//   }

//   get title() {
//     return this.#title;
//   }

//   set title(newTitle) {
//     if (typeof newTitle !== 'string') return;
//     this.#title = newTitle;
//   }

//   // Getters and setters vs methods
//   // getTitle() {
//   //   return this.#title;
//   // }

//   // setTitle(newTitle) {
//   //   if (typeof newTitle !== 'string') return;
//   //   this.#title = newTitle;
//   // }

//   addGenre(newGenre) {
//     // check for validity ie. if type of genre is a string

//     // check the current genres for duplicates

//     this.#genre.push(newGenre);
//     // return this.#genre;

//     // DOM manipulation to display the new genre in the screen
//   }

//   static platforms() {
//     console.log(
//       'We sell games for the platforms: PS4, PS5, XBox Series X, Nintendo Switch'
//     );
//   }
// }

// console.log(typeof Videogame);
// const horizon = new Videogame('Horizon Forbidden West', 'Guerrilla Games');

// horizon.addGenre('Open world');
// horizon.title = 'Red Dead Redemption 2';
// Videogame.platforms();

// console.log(horizon.title);
// console.log(horizon.getTitle());

// horizon.setTitle = function () {
//   console.log('Hacked the setTitle method :D');
// };
// horizon.setTitle();

// console.log(horizon);

// Cannot access the constructor without the new keyword
// const tryToCallConstructor = horizon.constructor(
//   'Horizon Zero Dawn',
//   'Guerrilla Games'
// );

// const diablo4 = new Videogame('Diablo IV', 'Activision');

// console.log(diablo4);

// Date object
// console.log(typeof Date);
// console.log(Date.now());
// console.log(new Date().now());

// console.log(new Date().getFullYear());
// console.log(Date.getFullYear());

// The this keyword
// console.log('this in global scope', this);

function getThis() {
  // rogueVariable = 'Im a rebel!';
  // console.log(rogueVariable);
  console.log('this in function scope', this);
}

// getThis();

const secondObject = {
  name: 'Priyanka',
};

const myObject = {
  name: 'Sully',
  sayHi: function () {
    console.log('this in a method', this);
    // console.log(`${this.name} says hi!`);
    // function internalFunc() {
    //   console.log('this in a function inside a method', this);
    //   console.log(`${this.name} says hi!`);
    // }

    // internalFunc.bind(this)();

    const internalFunc = () => {
      console.log('this in an arrow function inside a method', this);
      console.log(`${this.name} says hi!`);
    };

    internalFunc();
  },
};

// myObject.sayHi();

// Inheritance in JS

const exampleArr = [1, 2, 3];

// console.log(exampleArr);
// console.log(exampleArr.length);
// console.log(exampleArr.pop());
// console.log(exampleArr.toString());
// console.log(exampleArr.isPrototypeOf());

// Array.prototype.map = function () {
//   console.log('Hacked the map method');
// };

// exampleArr.map();

// Inheritance with classes

class Videogame {
  #title;
  #createdBy;
  #genre = [];

  constructor(title, createdBy) {
    this.#title = title;
    this.#createdBy = createdBy;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    if (typeof newTitle !== 'string') return;
    this.#title = newTitle;
  }

  addGenre(newGenre) {
    this.#genre.push(newGenre);
    return this.#genre;
  }
}

class PSGames extends Videogame {
  constructor(title, createdBy) {
    super(title, createdBy);
    this.platforms = ['PS4', 'PS5'];
  }

  set title(newTitle) {
    if (typeof newTitle !== 'string') return;
    super.title = newTitle;
  }

  // polymorphism
  addGenre(newGenre) {
    super.addGenre(newGenre);
    console.log(`Hello from child class`);
  }
}

const horizonPS = new PSGames('Horizon Burning Shores', 'Guerilla Games');

horizonPS.title = 'Horizon Frozen Wilds';
console.log(horizonPS);
horizonPS.addGenre('Non-linear');
