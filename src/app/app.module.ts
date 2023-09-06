import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importar componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { DevsComponent } from './components/devs/devs.component';
import { PedidosComponent } from './components/gestion/pedidos/pedidos.component';
import { DashboardComponent } from './components/gestion/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InforPageComponent } from './components/information/infor-page/infor-page.component';
import { InforAboutComponent } from './components/information/infor-about/infor-about.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    ReservaComponent,
    ContactoComponent,
    GaleriaComponent,
    TestimonioComponent,
    DevsComponent,
    PedidosComponent,
    DashboardComponent,
    CarouselComponent,
    InforPageComponent,
    InforAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'jgarzon97.us.auth0.com',
      clientId: 'SgRvnBxNAk5UoDZE4CsYzrJRue2CBXHv',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
