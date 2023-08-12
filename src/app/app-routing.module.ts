import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes propios
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { MenuComponent } from './components/menu/menu.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { DevsComponent } from './components/devs/devs.component';
import { PedidosComponent } from './components/gestion/pedidos/pedidos.component';
import { DashboardComponent } from './components/gestion/dashboard/dashboard.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InforPageComponent } from './components/information/infor-page/infor-page.component';
import { InforAboutComponent } from './components/information/infor-about/infor-about.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'testimonio', component: TestimonioComponent},
  {path: 'devs', component: DevsComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'infor-page', component: InforPageComponent},
  {path: 'infor-about', component: InforAboutComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
