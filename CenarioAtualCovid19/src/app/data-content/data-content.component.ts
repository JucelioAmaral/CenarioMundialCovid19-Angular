import { Component, OnInit } from '@angular/core';
import { Data } from '../utils/data';
import { dadosService } from '../services/dados.service';
@Component({
  selector: 'app-data-content',
  templateUrl: './data-content.component.html',
  styleUrls: ['./data-content.component.css']
})
export class DataContentComponent implements OnInit {

  mundo = {} as Data;
  pais = {} as Data;
  total_brasil: number;
  total_mundo: number;
  last_date: any;
  cases_order: any;
  mundial: Data[] = [];

  constructor( private toroService : dadosService) {
    this.total_brasil = 0;
    this.total_mundo = 0;
   }
  ngOnInit(): void {
    this.getCasosMundo();
    console.log("Mundooo",this.dataSource)
  }

  dataSource = []
  async getCasosMundo() {
    console.log('iniciou => getCasosMundo');

    this.toroService.getCasosMundo().subscribe((mundo: any) => {
      console.log('mundo => ', mundo);
      this.mundial = mundo;
/* const  para receber o tipo da classe, cada classe é referente a um objeto do json*/

      const { Global, Date, Countries } = mundo;

    /** Ordenação do top dez numero de casos por pais */
      const contriesOrdened = Countries.sort((a: { TotalConfirmed: number; }, b: { TotalConfirmed: number; }) => {
        return b.TotalConfirmed - a.TotalConfirmed;
      }).slice(0, 10);

      this.cases_order = contriesOrdened;
      console.log('Cases Order =>', this.cases_order);
      this.dataSource = this.cases_order;
      const {
        NewConfirmed,
        TotalConfirmed,
        NewDeaths,
        TotalDeaths,
        NewRecovered,
        TotalRecovered,
      } = Global;
      this.total_mundo = TotalConfirmed;
    });
  }
}
