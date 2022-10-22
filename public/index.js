
// Triangle Section////////////////////////////////////////////////////////

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.strokeStyle = "blue";
ctx.fillText("Figure 1: Triangle", 50, 160);
ctx.moveTo(100,50);

ctx.lineTo(10,130);

ctx.lineTo(150,130);

ctx.closePath();

ctx.stroke();

ctx.beginPath();

ctx.moveTo(100,50);

ctx.lineTo(100,130);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(100,120);

ctx.lineTo(110,120);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(110,120);

ctx.lineTo(110,130);

ctx.stroke();

function changeColorV(){
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.font ="15px serif";
  ctx.fillText("height",60,100);
  ctx.moveTo(100,50);

  ctx.lineTo(100,130);

  ctx.stroke();
}

function changeColorB(){
  ctx.beginPath();
  ctx.font ="15px serif";
  ctx.fillText("base",80,140);
  ctx.strokeStyle = "red";
  ctx.moveTo(10,130);
  ctx.lineTo(150,130);
  ctx.stroke();
}

// Circle Section/////////////////////////////////////////////////////////////////////


const canvas2 = document.getElementById("canvas2");

const ctx2 = canvas2.getContext("2d");

ctx2.strokeStyle = "blue";

ctx2.beginPath();

ctx2.arc(100,100,60,0, 2 * Math.PI);
ctx2.stroke();
ctx2.fillText("Figure 2: A Circle", 70,180);
ctx2.beginPath();
ctx2.strokeStyle = "white";
ctx2.moveTo(100,100);
ctx2.lineTo(160,100);
ctx2.stroke();

function changeColorRadi(){
  ctx2.beginPath();
  ctx2.fillText("radius",120,90);
  ctx2.strokeStyle = "red";
  ctx2.moveTo(100,100);
  ctx2.lineTo(160,100);
  ctx2.stroke();
}

// Cylinder Section//////////////////////////////////////////////////////////////////////////////////

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

ctx3.beginPath();
ctx3.fillText("Figure 3: A Cylinder", 75,175);
ctx3.fillText("height",65,90);
ctx3.fillText("radius",115,125);
ctx3.strokeStyle = "blue";
ctx3.fillText(".",100,30);
ctx3.fillText(".",100,130);
ctx3.ellipse(100,30, 65,25, Math.PI, 0, 2*Math.PI);
ctx3.ellipse(100,130, 65,25, Math.PI, 0, 2*Math.PI);
ctx3.moveTo(165,30);
ctx3.lineTo(165,130);
ctx3.stroke();
ctx3.beginPath();
ctx3.strokeStyle = "black";
ctx3.moveTo(100,130);
ctx3.lineTo(165,130);
ctx3.stroke();

ctx3.beginPath();
ctx3.strokeStyle = "black";
ctx3.moveTo(100,30);
ctx3.lineTo(100,130);
ctx3.stroke();

function changeColorCyh(){
  ctx3.beginPath();
  ctx3.strokeStyle = "red";
  ctx3.moveTo(100,30);
  ctx3.lineTo(100,130);
  ctx3.stroke();
}

function changeColorCyR(){
  ctx3.beginPath();
  ctx3.strokeStyle = "red";
  ctx3.moveTo(100,130);
  ctx3.lineTo(165,130);
  ctx3.stroke();
}

// Sphere Section /////////////////////////////////////////////////////////////////////////////////


const canvas4 = document.getElementById("canvas4");

const ctx4 = canvas4.getContext("2d");

ctx4.beginPath();
ctx4.fillText("Figure 4: A Sphere", 70, 180);
ctx4.fillText("diameter", 70,95)
ctx4.strokeStyle = "blue";

ctx4.arc(100,100,65,0,2*Math.PI);
ctx4.ellipse(100,100,65,25, Math.PI,0, 2 * Math.PI);
ctx4.stroke();

function changeColorSpR(){
  ctx4.beginPath();
  ctx4.font=("15px serif");
  ctx4.fillText("radius",120,115);
  ctx4.strokeStyle = "red";
  ctx4.moveTo(100,100);
  ctx4.lineTo(165,100);
  ctx4.stroke();
}

// Cone Section/////////////////////////////////////////////////////////////////////////////////

const canvas5 = document.getElementById("canvas5");

const ctx5 = canvas5.getContext("2d");

ctx5.beginPath();
ctx5.fillText("Figure 5: A Cone", 80, 200);
ctx5.strokeStyle = "blue";

ctx5.ellipse(100, 170, 65, 20, Math.PI, 0, 2* Math.PI );

ctx5.stroke();

ctx5.beginPath();

ctx5.strokeStyle = "blue";
ctx5.moveTo(100, 20);
ctx5.lineTo(35, 170);
ctx5.stroke();

ctx5.beginPath();
ctx5.strokeStyle = "blue";
ctx5.moveTo(100, 20);
ctx5.lineTo(165, 170);
ctx5.stroke();

ctx5.beginPath();
ctx5.strokeStyle = "black";
ctx5.moveTo(100, 20);
ctx5.lineTo(100, 170);
ctx5.stroke();

ctx5.beginPath();
ctx5.strokeStyle = "black";
ctx5.moveTo(100, 170);
ctx5.lineTo(165, 170);
ctx5.stroke();

ctx5.beginPath();
ctx5.strokeStyle = "black";
ctx5.moveTo(100, 160);
ctx5.lineTo(110, 160);
ctx5.stroke();

ctx5.beginPath();
ctx5.strokeStyle = "black";
ctx5.moveTo(110, 160);
ctx5.lineTo(110, 170);
ctx5.stroke();

function changeColorHcone(){
  ctx5.beginPath();
  ctx5.fillText("height", 70,100)
  ctx5.strokeStyle = "red";
  ctx5.moveTo(100, 20);
  ctx5.lineTo(100, 170);
  ctx5.stroke();
}

function changeColorRcone(){
  ctx5.beginPath();
  ctx5.fillText("radius",120,165);
  ctx5.strokeStyle = "red";
  ctx5.moveTo(100, 170);
  ctx5.lineTo(165, 170);
  ctx5.stroke();
}

// hemiSphere Section///////////////////////////////////////////////////////////////////////

const canvas6 = document.getElementById("canvas6");

const ctx6 = canvas6.getContext("2d");

ctx6.beginPath();
ctx6.strokeStyle = "blue";
ctx6.fillText("Figure 6:A Hemisphere ", 70, 200);
ctx6.ellipse(100, 170, 65, 20, Math.PI, 0, 2*Math.PI );
ctx6.stroke();

ctx6.beginPath();
ctx6.strokeStyle = "blue";
ctx6.arc(100, 170, 65, 0, 1 * Math.PI, true);
ctx6.stroke();

function changeColorHemiR(){
  ctx6.beginPath();
  ctx6.fillText("radius", 120, 165);
  ctx6.strokeStyle = "red";
  ctx6.moveTo(100, 170);
  ctx6.lineTo(165, 170);
  ctx6.stroke();

}
