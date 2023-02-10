import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { InstructoresyEscuelasComponent } from './instructoresy-escuelas/instructoresy-escuelas.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { EventosComponent } from './eventos/eventos.component';
import { CursosYSeminariosComponent } from './cursos-yseminarios/cursos-yseminarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { ExitComponent } from './exit/exit.component';
import { PagosComponent } from './pagos/pagos.component';








const routes: Routes = [
  { path: 'eventos', component: EventosComponent },
  { path:"noticias", component: NoticiasComponent },
  { path:"directorio", component:DirectorioComponent },
  { path:"instructoresyescuelas", component:InstructoresyEscuelasComponent },
  { path:"membresia", component: MembresiaComponent},
  { path:"cursosyseminarios", component: CursosYSeminariosComponent},
  { path:"perfil", component: PerfilComponent},
  { path:"login", component:LoginComponent },
  { path:"exit", component: ExitComponent},
  { path:"pagos", component: PagosComponent},
  {path: '', redirectTo: '/noticias', pathMatch: 'full'},
 // {path: '**', component: PageNotFoundComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
