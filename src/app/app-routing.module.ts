import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from "./menu/inicio/inicio.component";
import { ContactenosComponent } from "./menu/contactenos/contactenos.component";
import { NosotrosComponent } from "./menu/nosotros/nosotros.component";
import { PublicacionesComponent } from "./menu/publicaciones/publicaciones.component";


// Rutas de navegacion
const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'contactenos', component: ContactenosComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'publicaciones', component: PublicacionesComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}