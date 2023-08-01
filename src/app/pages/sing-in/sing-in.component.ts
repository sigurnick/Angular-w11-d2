import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {

  form!:FormGroup
  gender:string[] = ['Uomo', 'Donna']

  constructor(private fb: FormBuilder){} //conFormBuilder possiamo formare il form

  ngOnInit() {
    this.form = this.fb.group({
      //qui definiamo come è fatto. construiamo value

      //inserisco questo se ho un sottogruppo di input
      // authData: this.fb.group({
      //   email: this.fb.control(null),
      //   password: this.fb.control(null)
      //})

      name: this.fb.control(null,[Validators.required]),  // <-- nelle () inseriamo il valore di default seguito da un array di validatori
      cognome: this.fb.control(null,[Validators.required]),
      password: this.fb.control(null, [Validators.required]),
      confPassword: this.fb.control(null, [Validators.required]),
      gender: this.fb.array(this.gender),
      profilePhoto: this.fb.control(null),
      biography: this.fb.control(null),
      username: this.fb.control(null, [Validators.required])

    })
  }

  //invio form
  send() {
    console.log(this.form);
  }

  genderSelect() {
    const genderOption = this.form.get('gender')?.value
    console.log(genderOption);

  }

  //controlla se un campo è valido
  isValid(fieldName:string){
    return this.form.get(fieldName)?.valid
  }

  //controlla se un campo è stato toccato
  isTouched(fieldName:string) {
    return this.form.get(fieldName)?.touched
  }


  //controllo conferma password
  // passwordValidator = (formC: FormControl):ValidationErrors | null => {

  //   if(this.form.get('password')?.value !== this.form.get('confPassword')?.value) {
  //     console.log('pass non uguale');
  //     return {
  //       invalid: true,
  //       message: 'La password non corrisponde'
  //     }

  //   }
  //   return null
  // }




}
