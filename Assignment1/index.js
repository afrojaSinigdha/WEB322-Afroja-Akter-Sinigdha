const { EventEmitter } = require("events");
const trafficLightEmitter = new EventEmitter();

const lights = [
  { color: "Red", duration: 5000 },
  { color: "Yellow", duration: 2000 },
  { color: "Green", duration: 5000 },
];

let colorIdx = 0;

function changeColor() {
  const light = lights[colorIdx];
  console.log(`Current Color: ${light.color}`);
  trafficLightEmitter.emit("colorChange", light.color);
  
  colorIdx = (colorIdx + 1) % lights.length;
  
  setTimeout(changeColor, light.duration);
}

trafficLightEmitter.on("colorChange", (currentColor) => {
  console.log(`The light just changed to ${currentColor}`);
});

changeColor();




