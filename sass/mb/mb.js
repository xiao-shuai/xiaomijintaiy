import { observable, action } from "mobx";

class MbxData{
    @observable text;
    @observable skey;
    @observable login;
    @observable article;
    constructor(){
    this.text='wowoww777'
    this.login=false
    this.skey=''  
    this.article = [
        {
          title:'川西高原的诱惑：从塔公草原到理塘高城',
          img:'https://c-ssl.duitang.com/uploads/item/201703/22/20170322031920_zKBYN.thumb.700_0.jpeg',
          id:1
        },
    ]
    }
  sky=(e)=>{
   this.skey=e
  }
 
  save_login=(e)=>{  
     this.login=e
    }
  save_article = (e) => {
    this.article = e
  }
    
}
const datambx=new MbxData()
export {datambx}
