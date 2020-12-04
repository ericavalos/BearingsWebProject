import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarLicenciasComponent } from './componentes/agregar-licencias/agregar-licencias.component';
import { AgregarMantencionesComponente } from './componentes/agregar-mantenciones/agregar-mantenciones.component';
import { AgregarEquiposComponent } from './componentes/agregar-equipos/agregar-equipos.component';
import { AgregarUsuariosComponent } from './componentes/agregar-usuarios/agregar-usuarios.component';

import { CModificarLicenciasComponent } from './componentes/cmodificar-licencias/cmodificar-licencias.component';
import { ModificarMantencionesComponente } from './componentes/modificar-mantenciones/modificar-mantenciones.component';
import { ModificarEquiposComponent } from './componentes/modificar-equipos/modificar-equipos.component';
import { CmodificarEquiposComponent } from './componentes/cmodificar-equipos/cmodificar-equipos.component';
import { CModificarMantencionesComponente } from './componentes/cmodificar-mantenciones/cmodificar-mantenciones.component';
import { ModificarUsuariosComponent } from './componentes/modificar-usuarios/modificar-usuarios.component';
import { ModificarAccesoComponent } from './componentes/modificar-acceso/modificar-acceso.component';
import { ModificarCredencialesComponent } from './componentes/modificar-credenciales/modificar-credenciales.component';
import { ModificarLicenciasComponent } from './componentes/modificar-licencias/modificar-licencias.component';

import { MostrarLicenciasComponent } from './componentes/mostrar-licencias/mostrar-licencias.component';
import { MostrarEquiposComponent } from './componentes/mostrar-equipos/mostrar-equipos.component';
import { MostrarMantencionesComponente } from './componentes/mostrar-mantenciones/mostrar-mantenciones.component';
import { MostrarUsuariosComponent } from './componentes/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarAccesoComponent } from './componentes/mostrar-acceso/mostrar-acceso.component';
import { MostrarCredencialesComponent } from './componentes/mostrar-credenciales/mostrar-credenciales.component';

import { EliminarMantencionesComponente } from './componentes/eliminar-mantenciones/eliminar-mantenciones.component';
import { EliminarLicenciasComponent } from './componentes/eliminar-licencias/eliminar-licencias.component';
import { EliminarEquiposComponent } from './componentes/eliminar-equipos/eliminar-equipos.component';
import { EliminarUsuariosComponent } from './componentes/eliminar-usuarios/eliminar-usuarios.component';
import { SideBarMenuComponent } from './componentes/side-bar-menu/side-bar-menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

const routes: Routes = [
  { path: '' , component: InicioComponent },
  { path: 'Side-bar-menu' , component: SideBarMenuComponent },
  { path: 'agregar-licencias' , component: AgregarLicenciasComponent },  
  { path: 'agregar-equipos' , component: AgregarEquiposComponent },
  { path: 'agregar-mantenciones', component: AgregarMantencionesComponente },
  { path: 'agregar-usuarios', component: AgregarUsuariosComponent },
  { path: 'app-navbar', component: NavbarComponent },
  { path: 'mostrar-licencias' , component: MostrarLicenciasComponent },  
  { path: 'mostrar-mantenciones' , component: MostrarMantencionesComponente },
  { path: 'mostrar-equipos' , component: MostrarEquiposComponent },  
  { path: 'mostrar-usuarios', component: MostrarUsuariosComponent },
  { path: 'mostrar-acceso', component: MostrarAccesoComponent },
  { path: 'mostrar-credenciales', component: MostrarCredencialesComponent },

  { path: 'cmodificar-licencias' , component: CModificarLicenciasComponent },
  { path: 'modificar-equipos' , component: ModificarEquiposComponent },
  { path: 'modificar-mantenciones' , component: ModificarMantencionesComponente },
  { path: 'cmodificar-mantenciones' , component: CModificarMantencionesComponente },
  { path: 'cmodificar-equipos' , component: CmodificarEquiposComponent },
  { path: 'modificar-usuarios', component: ModificarUsuariosComponent },
  { path: 'modificar-acceso', component: ModificarAccesoComponent },
  { path: 'modificar-credenciales', component: ModificarCredencialesComponent },
  { path: 'app-modificar-licencias', component: ModificarLicenciasComponent },

  { path: 'eliminar-licencias' , component: EliminarLicenciasComponent },
  { path: 'eliminar-equipos' , component: EliminarEquiposComponent },
  { path: 'eliminar-mantenciones' , component: EliminarMantencionesComponente },  
  { path: 'eliminar-usuarios', component: EliminarUsuariosComponent },
];      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
