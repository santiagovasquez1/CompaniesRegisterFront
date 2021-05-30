import { CompanyService } from './../../Services/company.service';
import { GlobalService } from './../../Services/global.service';
import { Company } from './../../Models/company';
import { Component, OnInit } from '@angular/core';
import { InputValidatorDirective } from 'src/app/Directives/input-validator.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  public company: Company;
  public title: string;
  public message: string;
  public titleSms: string;
  public titleEmail: string;
  public smsOption: string;
  public emailOption: string;
  public emailOptionName: string;
  public smsOptionName: string;

  constructor(private global: GlobalService, private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {
    this.title = "Datos de la persona natural o jurídica que solicita el servicio de trámites virtuales:"
    this.company = new Company("Nit", "", "", "", "", "", "", "", false, false);
    this.message = "";
    this.titleSms = "¿Desea recibir notificaciones via SMS?";
    this.titleEmail = "¿Desea recibir notificaciones via Email?"
    this.smsOption = this.company.authrorizaMessageToCellPhone.toString();
    this.emailOption = this.company.authrorizaMessageToEmail.toString();
    this.emailOptionName = "emailRadio";
    this.smsOptionName = "smsRadio"
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params.id;
      this.company.identificationNumber = id;
      this.loadCompany(id);
    });
  }

  loadCompany(id: number) {
    this.companyService.getProjectById(id).subscribe(result => {
      this.company = <Company>result;
      this.smsOption = this.company.authrorizaMessageToCellPhone.toString();
      this.emailOption = this.company.authrorizaMessageToEmail.toString();
    }, error => {
      console.log(error.error)
    });
  }

  onSubmit(form: NgForm) {
    let id = Number.parseInt(this.company.identificationNumber);
    this.companyService.registerCompany(id, this.company).subscribe(result => {
      this.global.canRegister = false;
      this.router.navigate(["/"]);
    }, error => {
      form.reset();
      console.log(error);
    });
  }

  loadSmsOption(event: string) {
    if (event == "true") {
      this.company.authrorizaMessageToCellPhone = true;
    } else {
      this.company.authrorizaMessageToCellPhone = false;
    }
  }

  loadEmailOption(event: string) {
    if (event == "true") {
      this.company.authrorizaMessageToEmail = true;
    } else {
      this.company.authrorizaMessageToEmail = false;
    }
  }
}
