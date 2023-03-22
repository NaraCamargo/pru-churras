import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  conta1 = 0;
  conta2 = 0;
  pontosTime1 = 0;
  pontosTime2 = 0;
  constructor() {}

  botao1(){
    this.valendo = 1;
  }

  botao3(){
    this.valendo = 3;
  }

  botao6(){
    this.valendo = 6;
  }

  botao9(){
    this.valendo = 9;
  }

  botao12(){
    this.valendo = 12;
  }


  somaTime1(){
    this.conta1 = this.conta1 + this.valendo;

    if(this.conta1 >= 12){
      this.conta1 = 0;
      this.pontosTime1 = this.pontosTime1 + 1;
    }
  }

  menosTime1(){
    this.conta1 = this.conta1 - this.valendo;
    if(this.conta1 < 0){
      this.conta1 = 0;
    }
  }


  somaTime2(){
    this.conta2 = this.conta2 + this.valendo;
    if(this.conta2 >= 12){
      this.conta2 = 0;
      this.pontosTime2 = this.pontosTime2 + 1;
    }
  }
  menosTime2(){
    this.conta2 = this.conta2 - this.valendo;
    if(this.conta2 < 0){
      this.conta2 = 0;

    }
  }
  limpar(){
    this.pontosTime1 = 0;
    this.pontosTime2 = 0;

  }


}
