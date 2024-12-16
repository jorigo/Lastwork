import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EncuestaslistComponent } from './pages/encuestas/encuestas.component';
import { NgModule } from '@angular/core';
import { EditComponent as EditPreguntaComponent } from './pages/preguntas/edit2/edit2.component';
import { EditComponent as EditEncuestaComponent } from './pages/encuestas/edit/edit.component';
import { PreguntaslistComponent } from './pages/preguntas/preguntas.component';
import { TipopreguntaComponent } from './pages/tipo-pregunta/tipo-pregunta.component';
import { AddComponent as AddEncuestaComponent } from './pages/encuestas/add/add.component';
import { AddPreguntasComponent } from './pages/preguntas/add/add.component';
import { AddComponent as AddTipoPreguntaComponent } from './pages/tipo-pregunta/add/add.component';
import { PreguntasasociadasComponent } from './pages/preguntasasociadas/preguntasasociadas.component';
import { EditComponent } from './pages/tipo-pregunta/edit/edit.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'encuestas', component: EncuestaslistComponent },
  { path: 'encuestas/edit/:id', component: EditEncuestaComponent },
  { path: 'encuestas/add', component: AddEncuestaComponent },
  { path: 'preguntas/add', component: AddPreguntasComponent },
  { path: 'tipo-pregunta/add', component: AddTipoPreguntaComponent },
  { path: 'preguntas', component: PreguntaslistComponent },
  { path: 'edit2', component: EditPreguntaComponent },
  { path: 'tipo-pregunta', component: TipopreguntaComponent },
  { path: 'tipo-pregunta/edit/:id', component: EditComponent },
  { path: 'preguntas/gestion/:id', component: PreguntaslistComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'preguntas/add/:id', component: AddPreguntasComponent },
   { path: 'preguntasasociadas/:id', component: PreguntasasociadasComponent },
   


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 