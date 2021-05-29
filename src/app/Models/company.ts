export class Company {
  constructor(public IdentificationType:string,
    public IdentificationNumber:string,
    public CompanyName:string,
    public FirstName:string,
    public SecondName:string,
    public FirstLastName:string,
    public SecondLastName:string,
    public Email:string,
    public AuthrorizaMessageToCellPhone:boolean,
    public AuthrorizaMessageToEmail:boolean) {
  }
}
