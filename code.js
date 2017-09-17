var padfactor=0.1;
var barpad=40;
var tophalf=0.45;
var division=[0.3, 0.4, 0.3, 0.4, 0.6];

function resize(){
  document.getElementById('1').style.width=(1-padfactor/3)*(window.innerWidth)*division[0]-barpad/3+"px";
  document.getElementById('1').style.height=(1-padfactor/2)*(window.innerHeight)*tophalf+"px";
  document.getElementById('2').style.width=(1-padfactor/3)*(window.innerWidth)*division[1]-barpad/3+"px";
  document.getElementById('2').style.height=(1-padfactor/2)*(window.innerHeight)*tophalf+"px";
  document.getElementById('3').style.width=(1-padfactor/3)*(window.innerWidth)*division[2]-barpad/3+"px";
  document.getElementById('3').style.height=(1-padfactor/2)*(window.innerHeight)*tophalf+"px";
  document.getElementById('4').style.width=(1-padfactor/2)*(window.innerWidth)*division[3]-barpad/2+"px";
  document.getElementById('4').style.height=(1-padfactor/2)*(window.innerHeight)*(1-tophalf)+"px";
  document.getElementById('5').style.width=(1-padfactor/2)*(window.innerWidth)*division[4]-barpad/2+"px";
  document.getElementById('5').style.height=(1-padfactor/2)*(window.innerHeight)*(1-tophalf)+"px";

  setTimeout(resize, 1000/60);
}

resize();
