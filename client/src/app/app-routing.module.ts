import { EditarboletoComponent } from './components/boletos/editarboleto/editarboleto.component';
import { NuevoboletoComponent } from './components/boletos/nuevoboleto/nuevoboleto.component';
import { NuevaterminalComponent } from './components/terminales/nuevaterminal/nuevaterminal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { BoletosComponent } from './components/boletos/boletos.component';
import { BusComponent } from './components/bus/bus.component';
import { ChoferComponent } from './components/chofer/chofer.component';
import { GestorBusesComponent } from './components/gestor-buses/gestor-buses.component';
import { PasajerosComponent } from './components/pasajeros/pasajeros.component';
import { TerminalesComponent } from './components/terminales/terminales.component';
import { EditarterminalComponent } from './components/terminales/editarterminal/editarterminal.component';
import { EditarpasajerosComponent } from './components/pasajeros/editarpasajeros/editarpasajeros.component';
import { NuevopasajerosComponent } from './components/pasajeros/nuevopasajeros/nuevopasajeros.component';
import { EditargestorBusesComponent } from './components/gestor-buses/editargestor-buses/editargestor-buses.component';
import { NuevogestorBusesComponent } from './components/gestor-buses/nuevogestor-buses/nuevogestor-buses.component';
import { EditarbusComponent } from './components/bus/editarbus/editarbus.component';
import { NuevobusComponent } from './components/bus/nuevobus/nuevobus.component';
import { EditarchoferComponent } from './components/chofer/editarchofer/editarchofer.component';
import { NuevochoferComponent } from './components/chofer/nuevochofer/nuevochofer.component';



const routes: Routes = [
  {path: '' , redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent },

  {path: 'sistema',
  component:DashboardComponent,
  children:[
    
  {path: 'dashboard', component:DashboardComponent},
  {path: 'boletos', component:BoletosComponent },
  {path: 'bus', component:BusComponent },
  {path: 'chofer', component:ChoferComponent },
  {path: 'gestor-buses', component:GestorBusesComponent },
  {path: 'pasajeros', component:PasajerosComponent },
  {path: 'terminales', component:TerminalesComponent },
  {path: 'terminales/nuevaterminal',component:NuevaterminalComponent},
  {path: 'terminales/editarterminal/:id',component:EditarterminalComponent},
  {path: 'pasajeros/nuevopasajeros',component:NuevopasajerosComponent},
  {path: 'pasajeros/editarpasajeros/:cedula', component: EditarpasajerosComponent},
  {path: 'gestor-buses/nuevogestor-buses', component: NuevogestorBusesComponent},
  {path: 'gestor-buses/editargestor-buses/:id', component: EditargestorBusesComponent},
  {path: 'bus/editarbus/:id', component:EditarbusComponent},
  {path: 'bus/nuevobus/', component:NuevobusComponent},
  {path: 'chofer/editarchofer/:id', component:EditarchoferComponent},
  {path: 'chofer/nuevochofer/', component: NuevochoferComponent},
  {path: 'boleto/editarboleto/:id', component: EditarboletoComponent},
  {path: 'boleto/nuevoboleto/', component: NuevoboletoComponent},
  ]

},

  
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, BoletosComponent, BusComponent, ChoferComponent, GestorBusesComponent,
   PasajerosComponent, TerminalesComponent, EditarterminalComponent,NuevaterminalComponent, EditarpasajerosComponent,NuevopasajerosComponent,
   NuevogestorBusesComponent,EditargestorBusesComponent,NuevobusComponent,EditarbusComponent, EditarchoferComponent, NuevochoferComponent,
   EditarboletoComponent, NuevoboletoComponent]
