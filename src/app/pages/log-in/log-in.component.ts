import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  @ViewChild('form') form!: NgForm;

  submit(form:NgForm) {
    console.log(this.form);


  }

}
