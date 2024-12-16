import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../../services/preguntas.service';
import { PreguntasModel } from '../../../models/preguntasModel';
import { PreguntasModule } from '../preguntas.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app edit',
  standalone: true,
  imports: [PreguntasModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.sass'],
})
export class EditComponent implements OnInit {
  preguntasList: PreguntasModel[] = []; 
  nuevaPregunta: PreguntasModel = new PreguntasModel(); 
  nextId: number = 1; 

  constructor(private preguntasService: PreguntasService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarPreguntas();
  }

  // Cargo el listado de todas las preguntas desde la base de datos
  cargarPreguntas() {
    this.preguntasService.getPreguntas().subscribe(
      (preguntas) => {
        this.preguntasList = preguntas;
        // Calcular el próximo ID basado en la lista actual
        const ids = this.preguntasList.map((p) => parseInt(p.id, 10) || 0);
        this.nextId = Math.max(...ids, 0) + 1;
        console.log(this.preguntasList);
      },
      (error) => {
        console.error('Error al cargar las preguntas:', error);
      }
    );
  }

  // para guardar una nueva pregunta en la base de datos
  guardarPregunta() {
    if (!this.nuevaPregunta.argumento || this.nuevaPregunta.argumento.trim() === '') {
      alert('El campo argumento no puede estar vacío.');
      return;
    }

    // asigno el id autogenerado a la nueva pregunta
    this.nuevaPregunta.id = this.nextId.toString();

    this.preguntasService.postPreguntas(this.nuevaPregunta).subscribe(
      (pregunta) => {
        
        this.preguntasList.push(this.nuevaPregunta);
       
        this.nextId++;
      
        this.nuevaPregunta = new PreguntasModel();
    
      },
      (error) => {
        console.error('Error al guardar la pregunta:', error);
      }
    );
  }

  back(){
    this.router.navigate(['/preguntas']);
  }

}
