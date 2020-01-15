const compare = require('./compare');
const logic = require('./logic');

module.exports = {
  compare,
  logic,
  float: (num) => {
    return Math.round(num);
  },
  hour: (total) => {
    const min = total % 60;
    const hour = Math.floor((total / 60));
    if(hour > 0) {
      return `${hour}h ${min}min`;
    }

    return `${min}min`;

  },
  getIndex: (num) => {
    return num+1;
  }
};
