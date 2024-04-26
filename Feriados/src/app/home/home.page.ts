import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  public feriados: any = [];
  public anos: any = [];
  public ano: number = new Date().getFullYear();
  public token: string = '7539|FvuP6QejKTP5kDPqXwKh5b6N3IeBoVHT';
  public url: string = `https://api.invertexto.com/v1/holidays/${this.ano}?token=${this.token}`;
  
  constructor(public http: HttpClient) {
    
    this.criarFeriados();
    this.topDatas();
  }
  criarFeriados()
  {
    this.http.get(this.url).subscribe(res => {
      this.feriados = res;
    })
  }
  invData(data: any)
  {
    data = data.split('-');
    return `${data[2]}/${data[1]}/${data[0]}`;
  }
  topDatas()
  {
    let atAno = new Date().getFullYear();
    let minAno = atAno - 20;
    let maxAno = atAno + 20;

    for(let i = minAno; i <= maxAno; i++)
    {
      this.anos.push(i);
    }
  }
  funcaoDeAlterarValor(){
    this.url = `https://api.invertexto.com/v1/holidays/${this.ano}?token=${this.token}`;
    this.http.get(this.url).subscribe(res => {
      this.feriados = res;
    })
  }
}
