class BresenhamLine{
    constructor(x1,y1,x2,y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(){
        let dx = abs(this.x2 - this.x1);
        let dy = abs(this.y2 - this.y1);
        let m = dy / dx;
      
        if (m < 1) {
          if (this.x1 > this.x2) {
            let temp = this.x1;
            this.x1 = this.x2;
            this.x2 = temp;
            temp = this.y1;
            this.y1 = this.y2;
            this.y2 = temp;
          }
      
          let y = this.y1;
          let d = 2 * dy - dx;
          for (let x = this.x1; x <= this.x2; x++) {
            point(x, y);
            if (d > 0) {
              y += 1;
              d -= 2 * dx;
            }
            d += 2 * dy;
          }
        } else {
          if (this.y1 > this.y2) {
            let temp = this.x1;
            this.x1 = this.x2;
            this.x2 = temp;
            temp = this.y1;
            this.y1 = this.y2;
            this.y2 = temp;
          }
      
          let x = this.x1;
          let d = 2 * dx - dy;
          for (let y = this.y1; y <= this.y2; y++) {
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