"use strict";
class Airplane {
    fly() {
        console.log("Airplane is flying");
    }
}
class Boat {
    float() {
        console.log("Boat is floating");
    }
}
class Seaplane {
    fly() {
        console.log("Seaplane is flying");
    }
    float() {
        console.log("Seaplane is floating");
    }
}
const seaplane = new Seaplane();
seaplane.fly(); // Implemented from CanFly
seaplane.float(); // Implemented from CanFloat
