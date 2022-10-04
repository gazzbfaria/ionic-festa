import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  salgadoAdulto : number = 10;
  salgadoCrianca: number = 7;
  refrigeranteAdulto: number = 400;
  refrigeranteCrianca: number = 300;
  boloAdulto: number = 100;
  boloCrianca:number = 100;
  quantidadeAdulto: number;
  quantidadeCrianca:number;
  totalSalgado: number = 0;
  totalRefrigerante:number = 0;
  totalBolo:number = 0;
  constructor() {}

  calcular(){
    this.totalSalgado = (this.quantidadeAdulto * this.salgadoAdulto) + (this.quantidadeCrianca*this.salgadoCrianca);
    this.totalRefrigerante = ((this.quantidadeAdulto * this.refrigeranteAdulto) + (this.quantidadeCrianca*this.refrigeranteCrianca))/1000;
    this.totalBolo = ((this.quantidadeAdulto * this.boloAdulto) + (this.quantidadeCrianca*this.boloCrianca))/1000;
  }

}
