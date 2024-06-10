import { Draw } from './draw.js'
import { ArtCard } from '@/components/artcard/artCard';
import { increment } from '@/redux/01/features/counterSlice';
class Table {
  constructor(el, row, col, style, formulam) {
    console.log(el, row, col, style, formulam)

    this.el = el;
    this.context = el.getContext('2d');
    this.draw = new Draw(el)
    this.scrollOffset = { x: 0, y: 0 };
    this.row = row;
    this.col = col;
    this.style = style;
    this.formulam = formulam;
    this.data = []

  }

  render() {
    this.renderContentGrid()

  }

  renderContentGrid() {

    const {
      draw, scrollOffset, row, col

    } = this
    console.log(row, col)
    draw.save()
    draw.attr({
      lineWidth: 0.5,
      strokeStyle: '#d0d0d0',
    })
    this.rowEach(row.len, (i, y) => {
      console.log(i, y)
      draw.line([0, y], [this.el.width, y])
    })


    this.colEach(col.len, (i, x) => {
      draw.line([x, 0], [x, this.el.height]);
    });


    draw.restore()


  }

  colEach(colLen, cb) {
    let x = 0;
    for (let i = 0; i <= colLen; i++) {
      const colWidth = this.getColWidth(i);
      cb(i, x, colWidth)
      x += colWidth
    }

  }

  getColWidth(index) {
    const { col } = this;
    return col.width
  }

  rowEach(rowLen, cb) {
    let y = 0
    for (let i = 0; i <= rowLen; i++) {
      const rowHeight = this.getRowHeight(i);
      cb(i, y, rowHeight)
      y += rowHeight
    }

  }

  getRowHeight(index) {
    const { row } = this;
    return row.height
  }

}

export default Table