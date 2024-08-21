class Point {
  // Properties (opt)
  x;
  y;

  constructor (x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // Custom string representation for the Point object
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  // Methods
  calculateDistance(point) {
    let d = Math.abs(Math.sqrt((point.x-this.x)**2 + (point.y-this.y)**2));
    return d;
  }
}

// Test cases
let a = new Point(0, 0);
let b = new Point(3, 4);
let c = new Point(1, 1);

let aToB = a.calculateDistance(b);
let aToC = a.calculateDistance(c);
let bToC = b.calculateDistance(c);

console.log (`The distance from ${a} to ${b} is ${aToB}`);
console.log (`The distance from ${a} to ${c} is ${aToC}`);
console.log (`The distance from ${b} to ${c} is ${bToC}`);

let out = document.querySelector("#result");
let firstClick = null;

window.addEventListener ("click", (e) => {
  console.log(e.clientX, e.clientY);
  if (!firstClick) {
    firstClick = new Point (e.clientX, e.clientY);
    console.log(`First click at ${firstClick}`);
    out.innerHTML = ""; //remove output
  } else {
    let secondClick = new Point (e.clientX, e.clientY);
    console.log(`Second click at ${secondClick}`);
    let distance = firstClick.calculateDistance(secondClick);
    out.innerHTML = `The distance from ${firstClick} to ${secondClick} is ${distance}`;
    firstClick = null; // reset for a new "go"
  }
});