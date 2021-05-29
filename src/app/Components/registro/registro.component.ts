import { CompanyService } from './../../Services/company.service';
import { GlobalService } from './../../Services/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public title: string
  public Nit: string;
  public message: string;
  public errorRegister: Boolean;
  public errorType: string;

  constructor(public global: GlobalService, private companyService: CompanyService, private router: Router) {
    this.title = "Inscripción al servicio:"
    this.Nit = "";
    this.message = "";
    this.global.canRegister = false
    this.errorRegister = false;
    this.errorType = "Tramite03003003";
  }

  ngOnInit(): void {

    this.companyService.homeService().subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  onSubmit(form: any) {
    let id = Number.parseInt(this.Nit);
    this.companyService.CanRegister(id).subscribe(result => {
      this.global.canRegister = result.CanRegister;
      this.router.navigate(["infoCompany", id]);
    }, error => {
      this.global.canRegister = error.error.CanRegister;
      this.errorRegister = true;
      this.message = `La identificación de la empresa ${this.Nit} no esta registrada`;
      console.log(error.error, this.global);
      form.reset();

    })
  }

  getIsClose(event: any) {
    this.errorRegister = event;
    document.getElementById("NitInput")?.focus()
  }

}
