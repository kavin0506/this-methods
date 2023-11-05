 // 1.Use call method
const car = {
  name: 'car',
  start() {
    console.log('Start the ' + this.name);
  },
  speedUp() {
    console.log('Speed up the ' + this.name);
  },
  stop() {
    console.log('Stop the ' + this.name);
  },
};

const aircraft = {
  name: 'aircraft',
  fly() {
    console.log('Fly');
  },
};

console.log(car.start.call(aircraft));
console.log(car.speedUp.call(aircraft));
console.log(aircraft.fly.call());
// OutPut: 
// Start the aircraft
// Speed up the aircraft
// Fly

// 2.
let arr12 = [1, 2, 3];
let numbers = [4, 5, 6];
arr12.push.apply(arr12,numbers)
console.log(arr12);
 // Output:[ 1, 2, 3, 4, 5, 6 ] Use apply method
 
 
// 3.
const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
console.log(computer.turnOn.apply(server))
 // Output
// The Dell PowerEdge T30 is On  use apply method

// 4.
let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};
let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};
// Output:
// Flyer runs at 20 mph.

// use bind method

let answer=(runner.run.bind(flyer,20));
console.log(answer());
