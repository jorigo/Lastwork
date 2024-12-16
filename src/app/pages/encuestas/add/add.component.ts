import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EncuestasService } from './../../../services/encuestas.service';
import { EncuestaModel } from '../../../models/encuestaModel';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  public encuestasList: EncuestaModel[] = [];
  public newEcuesta: EncuestaModel = new EncuestaModel();
  public nextId: string = " ";
  items: any;
  isFormReady: boolean = true;
  

  constructor(private encuestasService: EncuestasService, private router: Router) { }

  ngOnInit(): void {
    // Cargar las encuestas actuales para determinar el próximo ID
    this.encuestasService.getEncuestas().subscribe(
      (encuestas) => {
        this.encuestasList = encuestas;
        this.generarNuevoId(); // Generar el próximo ID al iniciar el componente
      },
      (error) => {
        console.error('Error al cargar encuestas:', error);
      }
    );
  }

  // Generar un ID único incremental basado en la lista de encuestas existentes
  generarNuevoId(): void {
    if (this.encuestasList.length > 0) {
      const ids = this.encuestasList.map((encuesta) => Number(encuesta.id));
      const maxId = Math.max(...ids);
      this.newEcuesta.id = (maxId + 1).toString();
      
    } else {
      this.newEcuesta.id = '1'; // Si no hay encuestas, comenzar con ID 1
    }
  }

  // Guardar la nueva encuesta
  onGuardar(): void {
    // Validar que el nombre no esté vacío
    if (!this.newEcuesta.nombre.trim()) {
      return;
    }

    this.encuestasService.postEncuestas(this.newEcuesta).subscribe(
      (res) => {
        this.router.navigate(['/encuestas']); // Redirigir al listado de encuestas
      },
      (error) => {
        console.error('Error al guardar la encuesta:', error);
      }
    );
  }
      back(){
        this.router.navigate(['/encuestas']);
      }
}