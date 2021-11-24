import { Component, Input, Output, OnInit} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {


  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
    
     
  }
  
  // @input('valor') progreso: number = 15;
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter(); 

  

  cambiarvalor(valor: number){
    
    if(this.progreso >= 100 && valor >=0){
      this.valorSalida.emit(100);  
      return this.progreso = 100;

    }

    if(this.progreso <= 100 && valor < 0){
      this.valorSalida.emit(0); 
      return this.progreso = 0;

    }

    return this.progreso = this.progreso + valor
    

  }

  Onchange(nuevovalor:number){
    if(nuevovalor >= 100){
      this.progreso=100;
    }else if(nuevovalor <= 0){
      this.progreso= 0;
    }else{
      this.progreso = nuevovalor;

    }
    this.valorSalida.emit(this.progreso);


  }


}

