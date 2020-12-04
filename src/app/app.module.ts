import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './componentes/navbar/navbar.component';
import { SideBarMenuComponent } from './componentes/side-bar-menu/side-bar-menu.component';

import { AgregarLicenciasComponent } from './componentes/agregar-licencias/agregar-licencias.component';
import { AgregarMantencionesComponente } from './componentes/agregar-mantenciones/agregar-mantenciones.component';
import { AgregarEquiposComponent } from './componentes/agregar-equipos/agregar-equipos.component';
import { AgregarUsuariosComponent } from './componentes/agregar-usuarios/agregar-usuarios.component';
import { CModificarLicenciasComponent } from './componentes/cmodificar-licencias/cmodificar-licencias.component';
import { ModificarUsuariosComponent } from './componentes/modificar-usuarios/modificar-usuarios.component';
import { ModificarAccesoComponent } from './componentes/modificar-acceso/modificar-acceso.component';
import { ModificarCredencialesComponent } from './componentes/modificar-credenciales/modificar-credenciales.component';
import { ModificarEquiposComponent } from './componentes/modificar-equipos/modificar-equipos.component';
import { CmodificarEquiposComponent } from './componentes/cmodificar-equipos/cmodificar-equipos.component';
import { MostrarMantencionesComponente } from './componentes/mostrar-mantenciones/mostrar-mantenciones.component';
import { MostrarLicenciasComponent } from './componentes/mostrar-licencias/mostrar-licencias.component';
import { MostrarEquiposComponent } from './componentes/mostrar-equipos/mostrar-equipos.component';
import { EliminarEquiposComponent } from './componentes/eliminar-equipos/eliminar-equipos.component';
import { EliminarLicenciasComponent } from './componentes/eliminar-licencias/eliminar-licencias.component';
import { EliminarUsuariosComponent } from './componentes/eliminar-usuarios/eliminar-usuarios.component';
import { MostrarUsuariosComponent } from './componentes/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarAccesoComponent } from './componentes/mostrar-acceso/mostrar-acceso.component';
import { MostrarCredencialesComponent } from './componentes/mostrar-credenciales/mostrar-credenciales.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CModificarMantencionesComponente } from './componentes/cmodificar-mantenciones/cmodificar-mantenciones.component';
import { EliminarMantencionesComponente } from './componentes/eliminar-mantenciones/eliminar-mantenciones.component';
import { ModificarMantencionesComponente } from './componentes/modificar-mantenciones/modificar-mantenciones.component';
import { ModificarLicenciasComponent } from './componentes/modificar-licencias/modificar-licencias.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SideBarMenuComponent,
    MostrarLicenciasComponent,
    AgregarLicenciasComponent,
    CModificarLicenciasComponent,
    EliminarLicenciasComponent,
    MostrarMantencionesComponente,
    AgregarMantencionesComponente,
    MostrarEquiposComponent,
    AgregarEquiposComponent,
    ModificarEquiposComponent,
    EliminarEquiposComponent,
    CmodificarEquiposComponent,
    AgregarUsuariosComponent,
    ModificarUsuariosComponent,
    EliminarUsuariosComponent,
    ModificarAccesoComponent,
    ModificarCredencialesComponent,
    MostrarUsuariosComponent,
    MostrarAccesoComponent,
    MostrarCredencialesComponent,
    InicioComponent,
    CModificarMantencionesComponente,
    EliminarMantencionesComponente,
    ModificarMantencionesComponente,
    ModificarLicenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
