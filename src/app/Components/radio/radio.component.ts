import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() public title: string;
  @Output() sendBindingState = new EventEmitter();
  @Input() public radioName: string;
  @Input() public myValue: string;

  constructor() {
    this.title = "";
    this.myValue = "";
    this.radioName="";
  }

  ngOnInit(): void {

  }

  onChange() {
    this.sendBindingState.emit(this.myValue);
  }
}
