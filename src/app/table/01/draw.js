class Draw {

  constructor(el) {
    this.el = el
    this.ctx = el.getContext('2d')

  }
  save() {
    this.ctx.save();
    this.ctx.beginPath();
    return this;
  }

  attr(options) {
    Object.assign(this.ctx, options);
    return this;
  }
  restore() {
    this.ctx.restore();
    return this;
  }

  line(...xys) {
    let { ctx } = this
    if (xys.length > 1) {
      const [x, y] = xys[0];
      ctx.moveTo(x, y);
      for (let i = 1; i < xys.length; i += 1) {
        const [x1, y1] = xys[i];
        ctx.lineTo(x1, y1);
      }
      ctx.stroke()
    }
  }
}
export {
  Draw
}