import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TipoPreguntaService } from '../../../services/tipo-pregunta.service';
import { TipoPreguntaModel } from '../../../models/tipo-preguntaModel';

@Component({
  selector: 'app-tipopregunta/add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  public tipopreguntaList: TipoPreguntaModel[] = [];
  public newtipo: TipoPreguntaModel = new TipoPreguntaModel();
  public nextId: string = " ";
  items: any;
  isFormReady: boolean = true;
  

  constructor(private tipopreguntaService: TipoPreguntaService, private router: Router) { }

  ngOnInit() {
    this.tipopreguntaService.gettipopregunta().subscribe((res: any) => {
      console.log(res);
      this.tipopreguntaList = res;
  
      // Calcular el próximo ID único basado en el ID más alto de la lista
      const maxId = this.tipopreguntaList.reduce((max: number, pregunta: any) => 
        Math.max(max, parseInt(pregunta.id, 10)), 0);
      this.nextId = String(maxId + 1);
  
      this.newtipo.id = this.nextId;
    });
  }
  
  onGuardar(): void {
    this.newtipo.id = this.nextId; // Asignar el ID calculado antes de guardar
    this.tipopreguntaService.posttipopregunta(this.newtipo).subscribe((res: any) => {
      console.log(res);
  
      // Agregar el nuevo registro a la lista local
      this.tipopreguntaList.push(res);
  
      // Reiniciar el formulario y calcular el próximo ID único
      this.newtipo = new TipoPreguntaModel();
      const maxId = this.tipopreguntaList.reduce((max: number, pregunta: any) => 
        Math.max(max, parseInt(pregunta.id, 10)), 0);
      this.nextId = String(maxId + 1);
  
      this.newtipo.id = this.nextId;


      alert('Registro Guardado.');
      this.router.navigate(['/tipo-pregunta']);

    });
  }
  
    back(){
      this.router.navigate(['/tipo-pregunta']);
    }

  
}