import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NoticiasComponent,
    DirectorioComponent,
    InstructoresyEscuelasComponent,
    MembresiaComponent,
    EventosComponent,
    CursosYSeminariosComponent,
    PerfilComponent,
    LoginComponent,
    ExitComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
