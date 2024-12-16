import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoPreguntaService} from './../../../services/tipo-pregunta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  item: any = { id: '', tipo: '' };

  constructor(private tipopreguntaService: TipoPreguntaService, 
    private router: Router, 
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.tipopreguntaService.getById(id).subscribe(data => {
        this.item = data;
      });
    }
  
    update(): void {
      this.tipopreguntaService.update(this.item.id, this.item).subscribe(() => {
        alert('Registro actualizado exitosamente.');
        this.router.navigate(['/tipo-pregunta']);
      });
    }
  
    back(): void {
      this.router.navigate(['/tipo-pregunta']);
    }
}