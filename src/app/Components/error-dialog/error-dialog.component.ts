import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  public title: string
  public errorRegister:boolean;
  @Input() public message: string;
  @Input() public errorType:string;
  @Output() sendClose=new EventEmitter();

  constructor() {
    this.title = "Información"
    this.message = "";
    this.errorType="";
    this.errorRegister=true;
  }

  ngOnInit(): void {
  }

  onClose(event:any){
    this.errorRegister=false;
    this.sendClose.emit(this.errorRegister);
  }

}
