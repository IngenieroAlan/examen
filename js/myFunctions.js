function lineaBres(x1, y1, x2, y2) {
    let dY = y2 - y1;
    let dX = x2 - x1;

    let incYi=0, incXi=0;
    if (dY >= 0) {
        incYi = 1;
    } else {
        dY = dY*-1;
        incYi = -1;
    }
    if (dX >= 0) {
        incXi = 1;
    } else {
        dX = -1*dX;
        incXi = -1;
    }

    let incYr=0 , incXr=0;
    if (dX >= dY) {
        incYr = 0;
        incXr = incXi;
    } else {
        incXr = 0;
        incYr = incYi;
        let k = dX;
        dX = dY;
        dY = k;
    }
    let x = x1;
    let y = y1;
    let avR = 2 * dY;
    let av = avR - dX;
    let avI = av - dX;
    while (x != x2 || y != y2) {
        point(x, y);
        if (av >= 0) {
            x = x + incXi;
            y = y + incYi;
            av = av + avI;
        } else {
            x = x + incXr;
            y = y + incYr;
            av = av + avR;
        }
    } 
}
function lineaDDA(x1,y1,x2,y2){
  let dx = x2 - x1;
    let dy = y2 - y1;
    let steps, x_increment, y_increment;

    if (Math.abs(dx) > Math.abs(dy)) {
        steps = Math.abs(dx);
    } else {
        steps = Math.abs(dy);
    }

    x_increment = dx / steps;
    y_increment = dy / steps;

    let x = x1;
    let y = y1;

    for (let i = 0; i < steps; i++) {
        point(Math.round(x), Math.round(y));
        x += x_increment;
        y += y_increment;
    }

}
function lineaPP(x1,y1,x2,y2){
  let dx = x2-x1;
  let dy = y2-y1;
  if (dx < 0) {
    [x1, y1, x2, y2] = [x2, y2, x1, y1];
    dx = -dx;
    dy = -dy;
  }
  let m = dy/dx;
  let b = y1-m*x1;
  if(x1!=x2){
    for (let x = x1; x <= x2; x++) {
      let y = m * x + b;
      point(x, y);
    }
  }else{
    let inicio = (y1>y2)?y2:y1;
    let fin = (y1>y2)?y1:y2;
    for (let i = inicio; i <= fin; i++) {
      point(x1, i);
    }
  }
}
function algoritmoPM(r, xc,yc){
  let x = 0, y = r;
  let pk = 5/4 - r;
  point(xc + x, yc + y);
  trazarSimetria(x, y,xc,yc);
  while (x < y) {
      x++;
      if (pk < 0) {
          pk += 2 * x + 1;
      } else {
          y--;
          pk += 2 * (x - y) + 1;
      }
      trazarSimetria(x, y,xc,yc);
  }
}
function trazarSimetria(x, y,xc,yc) {
  point(xc + x, yc + y);
  point(xc + y, yc + x);
  point(xc - x, yc + y);
  point(xc - y, yc + x);
  point(xc + x, yc - y);
  point(xc + y, yc - x);
  point(xc - x, yc - y);
  point(xc - y, yc - x);
}