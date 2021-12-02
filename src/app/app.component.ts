import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form:FormGroup;
  estadoFormulario:any;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      terminos:['', [Validators.required, Validators.requiredTrue]],
    });
  }
  
  send():any {
    console.log(this.form.value)
  }
  
}
