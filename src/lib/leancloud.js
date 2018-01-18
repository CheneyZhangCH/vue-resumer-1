import AV from 'leancloud-storage'

let APP_ID = '6CqVakWVTbDYC7XaEGp2SHwO-gzGzoHsz';
let APP_KEY = 'bJk2dfIGpQisCyq1PB850DOV';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV
