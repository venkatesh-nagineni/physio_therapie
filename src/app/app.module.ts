import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactComponent} from './contact/contact.component';
import { routingModule} from './routing.module';
import { AppMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { NgxLoadingModule } from 'ngx-loading';
import { CookieLawModule } from 'angular2-cookie-law';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    UserloginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    FooterComponent,
    HeaderComponent,
    MainNavComponent,
    TeamComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    CookieLawModule,
    ModalModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [ContactComponent, UserloginComponent, RegisterComponent, ForgotpwdComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
