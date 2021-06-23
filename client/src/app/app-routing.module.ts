import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BoletosComponent } from './components/boletos/boletos.component';
import { BusComponent } from './components/bus/bus.component';
import { ChoferComponent } from './components/chofer/chofer.component';
import { GestorBusesComponent } from './components/gestor-buses/gestor-buses.component';
import { PasajerosComponent } from './components/pasajeros/pasajeros.component';
import { TerminalesComponent } from './components/terminales/terminales.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  
  {path: '' , redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent },
  {path: 'boletos', component:BoletosComponent },
  {path: 'bus', component:BusComponent },
  {path: 'chofer', component:ChoferComponent },
  {path: 'gestor-buses', component:GestorBusesComponent },
  {path: 'pasajeros', component:PasajerosComponent },
  {path: 'terminales', component:TerminalesComponent },
  {path: 'nuevo', component:NuevoComponent},
  {path: 'editar/:id', component:EditarComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, BoletosComponent, BusComponent, ChoferComponent, GestorBusesComponent, PasajerosComponent, TerminalesComponent]
