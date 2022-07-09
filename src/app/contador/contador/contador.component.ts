import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="masCinco()">+</button>

    <span>{{ numero }}</span>

    <button (click)="menosCinco()">-</button>
  `,
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
  
    base: number = 5;
  
    masCinco() {
      this.base += 5 
    }
  
    menosCinco() {
      this.base -= 5 
    }
  
    acumular(valor: number) {
      this.numero += valor;
    }
}
