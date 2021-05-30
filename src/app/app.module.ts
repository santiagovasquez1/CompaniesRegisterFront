import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { CompanyInfoComponent } from './Components/company-info/company-info.component';
import { ErrorComponent } from './Components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './Components/error-dialog/error-dialog.component';
import { InputValidatorDirective } from './Directives/input-validator.directive';
import { RadioComponent } from './Components/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    CompanyInfoComponent,
    ErrorComponent,
    ErrorDialogComponent,
    RadioComponent,
    InputValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
