trackRobot(20, 30, 10, 40);
trackRobot();
trackRobot(-10, 20, 10);

function trackRobot(n, e, s, w){
  let x = 0, y = 0;
  
  if (n) {
    y += n;
  }
  
  if (e) {
    x += e;
  }
  
  if (s) {
    y -= s;
  }
  
  if (w) {
    x -= w;
  }
  
  console.log('[' + x + ', ' + y + ']');
}
