export class Company {
  constructor(public identificationType:string,
    public identificationNumber:string,
    public companyName:string,
    public firstName:string,
    public secondName:string,
    public firstLastName:string,
    public secondLastName:string,
    public email:string,
    public authrorizaMessageToCellPhone:boolean,
    public authrorizaMessageToEmail:boolean) {
  }
}
