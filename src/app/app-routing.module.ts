import { ErrorComponent } from './Components/error/error.component';
import { CompanyInfoComponent } from './Components/company-info/company-info.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Security/auth.guard';

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'infoCompany/:id', component: CompanyInfoComponent,canActivate:[AuthGuard] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
