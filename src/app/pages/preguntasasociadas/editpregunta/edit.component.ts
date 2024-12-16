/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PreguntasService } from '../../../services/preguntas.service';
import { PreguntasModel } from '../../../models/preguntasModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
})
export class EditPreguntaComponent implements OnInit {
  pregunta: PreguntasModel = new PreguntasModel();

  constructor(
    private route: ActivatedRoute,
    private preguntasService: PreguntasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const preguntaId = this.route.snapshot.params['id'];
    this.cargarPregunta(preguntaId);
  }

  // Cargar datos de la pregunta
  cargarPregunta(id: string) {
    this.preguntasService.getpreguntas(id).subscribe(
      (response: any) => {
        this.pregunta = response as PreguntasModel;
      },
      (error: any) => console.error('Error al cargar la pregunta:', error)
    );
  }

  // Guardar cambios en la pregunta
  guardarCambios() {
    this.preguntasService.updatePregunta(this.pregunta).subscribe(
      () => {
        alert('Pregunta actualizada exitosamente');
        this.router.navigate(['/preguntasasociadas', this.pregunta.idencuesta]);
      },
      (error) => console.error('Error al actualizar la pregunta:', error)
    );
  }



}*/
