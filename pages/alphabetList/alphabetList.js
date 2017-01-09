Page({
  data:{
    list: [
      {alphabet: 'Top', datas: ['asome','aentries','are here']},
      {alphabet: 'A', datas: ['asome','aentries','are here']},
      {alphabet: 'B', datas: ['bbsome','bebntries','bare here']},
      {alphabet: 'C', datas:  ['csome','centries','care here']},
      {alphabet: 'D', datas:  ['dsome','dentries','dare here']},
      {alphabet: 'E', datas:  ['esome','eentries','eare here']},
      {alphabet: 'F', datas:  ['fsome','fentries','are here']},
      {alphabet: 'G', datas:  ['gsome','gentries','gare here']},
      {alphabet: 'H', datas:  ['hsome','hentries','hare here']},
      {alphabet: 'I', datas:  ['isome','ientries','iare here']},
      {alphabet: 'J', datas:  ['jsome','jentries','jare here']},
      {alphabet: 'K', datas:  ['ksome','kentries','kare here']},
      {alphabet: 'L', datas:  ['lsome','lentries','lare here']},
      {alphabet: 'M', datas:  ['msome','mentries','mare here']},
      {alphabet: 'N', datas:  ['nsome','nentries','nare here']},
      {alphabet: 'O', datas:  ['osome','oentries','oare here']},
      {alphabet: 'P', datas:  ['psome','pentries','pare here']},
      {alphabet: 'Q', datas:  ['qsome','qentries','qare here']},
      {alphabet: 'R', datas:  ['rsome','rentries','rare here']},
      {alphabet: 'S', datas:  ['some','sentries','sare here']},
      {alphabet: 'T', datas:  ['tsome','tentries','tare here']},
      {alphabet: 'U', datas:  ['usome','uentries','uare here']},
      {alphabet: 'V', datas:  ['vsome','ventries','vare here']},
      {alphabet: 'W', datas:  ['wsome','wentries','ware here']},
      {alphabet: 'X', datas:  ['xsome','xentries','xare here']},
      {alphabet: 'Y', datas:  ['ysome','yentries','yare here']},
      {alphabet: 'Z', datas:  ['zsome','zentries','zare here']},
    ],
    alpha: '',
    windowHeight: ''
  },
  onLoad(options){
    try {
      var res = wx.getSystemInfoSync()
      this.pixelRatio = res.pixelRatio;
      // this.apHeight = 32 / this.pixelRatio;
      // this.offsetTop = 160 / this.pixelRatio;
      this.apHeight = 16;
      this.offsetTop = 80;
      this.setData({windowHeight: res.windowHeight + 'px'})
    } catch (e) {
      
    }
  },
  handlerAlphaTap(e) {
    let {ap} = e.target.dataset;
    this.setData({alpha: ap});
  },
  handlerMove(e) {
    let {list} = this.data;
    let moveY = e.touches[0].clientY;
    let rY = moveY - this.offsetTop;
    if(rY >= 0) {
      let index = Math.ceil((rY - this.apHeight)/ this.apHeight);
      if(0 <= index < list.length) {
        let nonwAp = list[index];
        nonwAp && this.setData({alpha: nonwAp.alphabet});
      } 
    }
  }
})