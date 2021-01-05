const max_fireworks = 5,
  max_sparks = 50;

//Fireworks1----------------------------

let canvas = document.getElementById('myCanvas1');
let context = canvas.getContext('2d');
let fireworks = [];
 
for (let i = 0; i < max_fireworks; i++) {
  let firework = {
    sparks: []
  };
  for (let n = 0; n < max_sparks; n++) {
    let spark = {
      vx: Math.random() * 5 + .5,
      vy: Math.random() * 5 + .5,
      weight: Math.random() * .3 + .03,
      red: Math.floor(Math.random() * 2),
      green: Math.floor(Math.random() * 2),
      blue: Math.floor(Math.random() * 2)
    };
    if (Math.random() > .5) spark.vx = -spark.vx;
    if (Math.random() > .5) spark.vy = -spark.vy;
    firework.sparks.push(spark);
  }
  fireworks.push(firework);
  resetFirework(firework);
}
//window.requestAnimationFrame(explode);
 
function resetFirework(firework) {
  firework.x = Math.floor(Math.random() * canvas.width);
  firework.y = canvas.height;
  firework.age = 0;
  firework.phase = 'fly';
}
 
function explode() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((firework,index) => {
    if (firework.phase == 'explode') {
        firework.sparks.forEach((spark) => {
        for (let i = 0; i < 10; i++) {
          let trailAge = firework.age + i;
          let x = firework.x + spark.vx * trailAge;
          let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
          let fade = i * 20 - firework.age * 2;
          let r = Math.floor(spark.red * fade);
          let g = Math.floor(spark.green * fade);
          let b = Math.floor(spark.blue * fade);
          context.beginPath();
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
          context.rect(x, y, 4, 4);
          context.fill();
        }
      });
      firework.age++;
      if (firework.age > 100 && Math.random() < .05) {
        resetFirework(firework);
      }
    } else {
      firework.y = firework.y - 10;
      for (let spark = 0; spark < 15; spark++) {
        context.beginPath();
        context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
        context.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
        context.fill();
      }
      if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
    }
  });
  window.requestAnimationFrame(explode);
}

//Level 1--------------------------------

const codeL1 = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init1() {
var index = 0
  document.getElementById("input1").addEventListener('keydown', onKeyDownHandler1);

  function onKeyDownHandler1(e) {
    const key = parseInt(e.detail || e.which)
    console.log('key', key)
    if (key === codeL1[index]) {
      index++

      if (index === codeL1.length) {
        alert("YOU DID IT!")
        index = 0
        /*log1.textContent = ""*/
        document.getElementById("test-input1").innerHTML = ""
        //^deletes all text content AND the inpit field^
        window.requestAnimationFrame(explode)
        //^fireworks frame call
      }
    } else {
      index = 0
      alert("TRY AGAIN!")
      log1.textContent = ""
      //Need to figure out how to clear input field
    }
  }
  const input1 = document.querySelector('#input1');
const log1 = document.getElementById('log1');

input1.addEventListener('keydown', logKey1);

function logKey1(e) {
    log1.textContent += ` ${e.key}`
}
  
}

init1();


//Fireworks2----------------------------------------

/*const max_fireworks2 = 5,
  max_sparks2 = 50;*/
let canvas2 = document.getElementById('myCanvas2');
let context2 = canvas2.getContext('2d');
let fireworks2 = [];
 
for (let i = 0; i < max_fireworks; i++) {
  let firework = {
    sparks: []
  };
  for (let n = 0; n < max_sparks; n++) {
    let spark = {
      vx: Math.random() * 5 + .5,
      vy: Math.random() * 5 + .5,
      weight: Math.random() * .3 + .03,
      red: Math.floor(Math.random() * 2),
      green: Math.floor(Math.random() * 2),
      blue: Math.floor(Math.random() * 2)
    };
    if (Math.random() > .5) spark.vx = -spark.vx;
    if (Math.random() > .5) spark.vy = -spark.vy;
    firework.sparks.push(spark);
  }
  fireworks2.push(firework);
  resetFirework2(firework);
}
//window.requestAnimationFrame(explode2); <- called in listener functions below
 
function resetFirework2(firework) {
  firework.x = Math.floor(Math.random() * canvas2.width);
  firework.y = canvas2.height;
  firework.age = 0;
  firework.phase = 'fly';
}
 
function explode2() {
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
  fireworks2.forEach((firework,index) => {
    if (firework.phase == 'explode2') {
        firework.sparks.forEach((spark) => {
        for (let i = 0; i < 10; i++) {
          let trailAge = firework.age + i;
          let x = firework.x + spark.vx * trailAge;
          let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
          let fade = i * 20 - firework.age * 2;
          let r = Math.floor(spark.red * fade);
          let g = Math.floor(spark.green * fade);
          let b = Math.floor(spark.blue * fade);
          context2.beginPath();
          context2.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
          context2.rect(x, y, 4, 4);
          context2.fill();
        }
      });
      firework.age++;
      if (firework.age > 100 && Math.random() < .05) {
        resetFirework(firework);
      }
    } else {
      firework.y = firework.y - 10;
      for (let spark = 0; spark < 15; spark++) {
        context2.beginPath();
        context2.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
        context2.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
        context2.fill();
      }
      if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode2';
    }
  });
  window.requestAnimationFrame(explode2);
}


//Level 2----------------------------------------------


const codeL2 = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 65, 65, 66, 66, 38, 40, 38, 40, 39, 37];

function init2() {
var index = 0
  document.getElementById("input2").addEventListener('keydown', onKeyDownHandler2);

  function onKeyDownHandler2(e) {
    const key = parseInt(e.detail || e.which)
    console.log('key', key)
    if (key === codeL2[index]) {
      index++

      if (index === codeL2.length) {
        alert("YOU ROCK!")
        index = 0
        /*log1.textContent = ""*/
        document.getElementById("test-input2").innerHTML = ""
        //^deletes all text content AND the inpit field^
        window.requestAnimationFrame(explode2)
        //^fireworks frame call
      }
    } else {
      index = 0
      alert("TRY AGAIN!")
      log2.textContent = ""
      //Need to figure out how to clear input field
    }
  }
  const input2 = document.querySelector('#input2');
  const log2 = document.getElementById('log2');

input2.addEventListener('keydown', logKey2);

function logKey2(e) {
    log2.textContent += ` ${e.key}`
}
  
}

init2();


//Fireworks3-------------------------------------

/*const max_fireworks3 = 5,
  max_sparks3 = 50;*/
let canvas3 = document.getElementById('myCanvas3');
let context3 = canvas3.getContext('2d');
let fireworks3 = [];
 
for (let i = 0; i < max_fireworks; i++) {
  let firework = {
    sparks: []
  };
  for (let n = 0; n < max_sparks; n++) {
    let spark = {
      vx: Math.random() * 5 + .5,
      vy: Math.random() * 5 + .5,
      weight: Math.random() * .3 + .03,
      red: Math.floor(Math.random() * 2),
      green: Math.floor(Math.random() * 2),
      blue: Math.floor(Math.random() * 2)
    };
    if (Math.random() > .5) spark.vx = -spark.vx;
    if (Math.random() > .5) spark.vy = -spark.vy;
    firework.sparks.push(spark);
  }
  fireworks3.push(firework);
  resetFirework3(firework);
}
//window.requestAnimationFrame(explode3); <- called in listener functions below
 
function resetFirework3(firework) {
  firework.x = Math.floor(Math.random() * canvas3.width);
  firework.y = canvas3.height;
  firework.age = 0;
  firework.phase = 'fly';
}
 
function explode3() {
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  fireworks3.forEach((firework,index) => {
    if (firework.phase == 'explode3') {
        firework.sparks.forEach((spark) => {
        for (let i = 0; i < 10; i++) {
          let trailAge = firework.age + i;
          let x = firework.x + spark.vx * trailAge;
          let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
          let fade = i * 20 - firework.age * 2;
          let r = Math.floor(spark.red * fade);
          let g = Math.floor(spark.green * fade);
          let b = Math.floor(spark.blue * fade);
          context3.beginPath();
          context3.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
          context3.rect(x, y, 4, 4);
          context3.fill();
        }
      });
      firework.age++;
      if (firework.age > 100 && Math.random() < .05) {
        resetFirework(firework);
      }
    } else {
      firework.y = firework.y - 10;
      for (let spark = 0; spark < 15; spark++) {
        context3.beginPath();
        context3.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
        context3.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
        context3.fill();
      }
      if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode3';
    }
  });
  window.requestAnimationFrame(explode3);
}


//Level 3-----------------------------------------


const codeL3 = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 65, 65, 66, 66, 38, 40, 38, 40, 39, 37, 37, 39, 66, 65, 40, 65, 38, 66, 38, 65, 40, 66];

function init3() {
var index = 0
  document.getElementById("input3").addEventListener('keydown', onKeyDownHandler3);

  function onKeyDownHandler3(e) {
    const key = parseInt(e.detail || e.which)
    console.log('key', key)
    if (key === codeL3[index]) {
      index++

      if (index === codeL3.length) {
        alert("UNBELIEVABLE!")
        index = 0
        /*log1.textContent = ""*/
        document.getElementById("test-input3").innerHTML = ""
        //^deletes all text content AND the inpit field^
        window.requestAnimationFrame(explode3)
        //^fireworks frame call
      }
    } else {
      index = 0
      alert("TRY AGAIN!")
      log3.textContent = ""
      //Need to figure out how to clear input field
    }
  }
  const input3 = document.querySelector('#input3');
  const log3 = document.getElementById('log3');

input3.addEventListener('keydown', logKey3);

function logKey3(e) {
    log3.textContent += ` ${e.key}`
}
  
}

init3();