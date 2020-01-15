import default_img from 'global/img/default-img.png';
import default_img16 from 'global/img/default-img16.png';

export default (name) => {
  switch (name) {
    case 'default_img':
      return default_img;
    case 'default_img16':
      return default_img16;
    default:
      return default_img;
  }
}
