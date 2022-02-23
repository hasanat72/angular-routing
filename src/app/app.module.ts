import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./notfound.component";
import {GitHubComponent} from "./github.component";
import {routing} from './app.routing';
import {NewComponent} from "./new.component";
import {GitHubUserComponent} from "./githubuser.component";
import {LoginComponent} from "./login.component";
import {LoginService} from "./login.service";
import {AuthGuard} from "./auth-guard.service";
import {PreventUnsavedChangesGuard} from "./prevent-unsaved-changes-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    NewComponent,
    GitHubUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    LoginService,
    AuthGuard,
    PreventUnsavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
