import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestaModel } from '../../models/encuestaModel';
import { PreguntasModel } from '../../models/preguntasModel';
import { PreguntasService } from '../../services/preguntas.service';
import { EncuestasService } from '../../services/encuestas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.sass'],
})
export class PreguntaslistComponent implements OnInit {
  encuestasList: EncuestaModel[] = [];
  preguntasList: any;
  constructor(
    private router: Router,
    private preguntasService: PreguntasService,
    private encuestasService: EncuestasService
  ) {}

  ngOnInit(): void {
    this.cargarEncuestas();
  }

  // Cargar la lista de encuestas
  cargarEncuestas(): void {
    this.encuestasService.getEncuestas().subscribe(
      (encuestas: EncuestaModel[]) => {
        this.encuestasList = encuestas;
      },
      (error: any) => {
        console.error('Error al cargar las encuestas:', error);
      }
    );
  }

  // Redirigir al componente para agregar preguntas a la encuesta seleccionada
  onAgregarPreguntas(encuesta: EncuestaModel): void {
    this.router.navigate(['/preguntas/add', encuesta.id]);
  }

  deletePreguntas(id: string) {
    this.preguntasList = this.preguntasList.filter((Preguntas:  PreguntasModel ) => Preguntas.id !== id);
    this.preguntasService.deletePreguntas(id).subscribe();
     
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }

 // Navegar al componente EditPreguntasComponent
 irAEditarPreguntas(): void {
  this.router.navigate(['/edit2']);
}

}
