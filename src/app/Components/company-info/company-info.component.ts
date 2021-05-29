import { CompanyService } from './../../Services/company.service';
import { GlobalService } from './../../Services/global.service';
import { Company } from './../../Models/company';
import { Component, OnInit } from '@angular/core';
import { InputValidatorDirective } from 'src/app/Directives/input-validator.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  public company:Company;
  public title:string;
  public message:string;
  constructor(private companyService:CompanyService, private route: ActivatedRoute) {
    this.title="Datos de la persona natural o jurídica que solicita el servicio de trámites virtuales:"
    this.company=new Company("Nit","","","","","","","",false,false);
    this.message="";
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id=params.id;
      this.company.IdentificationNumber=id;
      this.loadCompany(id);
    });
  }

  loadCompany(id:number){
    this.companyService.getProjectById(id).subscribe(result=>{
      this.company=<Company>result;
    },error=>{
      console.log(error.error)
    });
  }

  onSubmit(form:NgForm){
    this.message="Formulario diligenciado correctamente"
    console.log(form.form);
  }
}
