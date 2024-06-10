import Table from './tabe';
const defaultOptions = {
  formats: [],
  fonts: [],
  formulas: [],
  row: {
    len: 10,
    height: 25,
  },
  col: {
    len: 5,
    width: 100,
  },
  style: {
    color: '#ffffff',
    align: 'left',
    valign: 'top',
    wrapText: true,
    font: {
      name: 'Arial',
      size: 14,
      color: '#333333',
      bitmap: 0,
    },
  },
};
class XSheet {

  options = {}


  constructor(el, options = {}) {
    this.el = el;
    Object.assign(defaultOptions, options);
    Object.assign(this.options, defaultOptions);
    this.data = null;
    const {
      row, col, style, formulas,
    } = this.options;



    this.table = new Table(el, row, col, style, formulas)
    this.render()





  }

  render() {
    this.table.render()
  }


}

const xsheet = (el, opitons = {}) => new XSheet(el, opitons)


if (window) {
  window.xsheet = xsheet
}
export default xsheet