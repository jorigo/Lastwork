import { Component, OnInit } from "@angular/core";
import { TipoPreguntaService } from "../../services/tipo-pregunta.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TipoPreguntaModel } from "../../models/tipo-preguntaModel";

@Component({
  selector: "app-tipo-pregunta",
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: "./tipo-pregunta.component.html",
  styleUrl: "./tipo-pregunta.component.sass"
})
export class TipopreguntaComponent implements OnInit {
public tipopreguntaList: TipoPreguntaModel [] = [];
string: any;


  constructor(private tipopeguntaService: TipoPreguntaService, private router: Router) {
  }
  ngOnInit() {
    this.tipopeguntaService.gettipopregunta().subscribe((res: any) => {
      console.log(res);
      this.tipopreguntaList = res;
  
    });
  }
  deletetiporegunta(id: string) {
    this.tipopreguntaList = this.tipopreguntaList.filter((TipoPregunta: TipoPreguntaModel ) => TipoPregunta.id !== id);
    this.tipopeguntaService.deletetipopregunta(id).subscribe();
     
  }

  back(){
    this.router.navigate(['/home']);
  }
}