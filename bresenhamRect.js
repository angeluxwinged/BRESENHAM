class BresenhamRect{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(){
      let x2 = this.x + this.w;
      let y2 = this.y + this.h;
    
      this.drawLine(this.x, this.y, this.x, y2);
      
      this.drawLine(x2, this.y, x2, y2);
      
      this.drawLine(this.x, this.y, x2, this.y);
      
      this.drawLine(this.x, y2, x2, y2);
    }
    
    drawLine(x1, y1, x2, y2){
      let dx = abs(x2 - x1);
      let dy = abs(y2 - y1);
      let m = dy / dx;
    
      if (m < 1) {
        if (x1 > x2) {
          let temp = x1;
          x1 = x2;
          x2 = temp;
          temp = y1;
          y1 = y2;
          y2 = temp;
        }
    
        let y = y1;
        let d = 2 * dy - dx;
        for (let x = x1; x <= x2; x++) {
          point(x, y);
          if (d > 0) {
            y += 1;
            d -= 2 * dx;
          }
          d += 2 * dy;
        }
      } else {
        if (y1 > y2) {
          let temp = x1;
          x1 = x2;
          x2 = temp;
          temp = y1;
          y1 = y2;
          y2 = temp;
        }
    
        let x = x1;
        let d = 2 * dx - dy;
        for (let y = y1; y <= y2; y++) {
          point(x, y);
          if (d > 0) {
            x += 1;
            d -= 2 * dy;
          }
          d += 2 * dx;
        }
      }
    }
  }