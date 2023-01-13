import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardUserComponentComponent } from './card-user-component/card-user-component.component';
import { CardListComponentComponent } from './card-list-component/card-list-component.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
const appRoutes: Routes = [
  { path: 'doctorSignIn', component: SignInComponentComponent },
  { path: 'secretaireSignIn', component: SignInComponentComponent },
  {path: '',component: HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponentComponent,
    CardUserComponentComponent,
    CardListComponentComponent,
    SignInComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
