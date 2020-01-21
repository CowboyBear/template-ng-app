import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../model/Person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-text-field-form',
  templateUrl: './text-field-form.component.html',
  styleUrls: ['./text-field-form.component.scss']
})
export class TextFieldFormComponent implements OnInit {

  formGroup: FormGroup;
  txtName: FormControl = new FormControl();
  txtEmail: FormControl = new FormControl();

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({});
    this.formGroup.addControl('name', this.txtName);
    this.formGroup.addControl('email', this.txtEmail);
  }

  onSubmit() {
    const person: Person = new Person();

    person.name = this.txtName.value;
    person.email = this.txtEmail.value;    

    this.personService.post(person).subscribe(
      (data) => {
        alert('Person created with success!');
      },
      (err) => {
        console.error('Error while posting person information: ', err);
      },
    );
  }

}
