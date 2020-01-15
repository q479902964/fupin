//动画效果来源是https://loading.io/css/
export default (name, addClass) => {
  switch (name) {
    case 'lds-default':
      return ldsDefault(addClass);
    case 'lds-ellipsis':
      return ldsEllipsis(addClass);
    default:
      return '';
  }
}

//圆圈
function ldsDefault(addClass) {
  addClass = addClass ? addClass : '';
  return `
  <div class="lds-default ${addClass}">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  `
}

//三点
function ldsEllipsis(addClass) {
  addClass = addClass ? addClass : '';
  return `
    <div class="lds-ellipsis ${addClass}">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  `
}
