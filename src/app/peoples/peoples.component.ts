import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {GenericValidator} from 'src/app/helpers/validators';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  @Output() submitData: EventEmitter<any> = new EventEmitter<any>();
  @Input() accessDataForm: FormGroup;

  public submitted: boolean;
  public maxDate = new Date();
  public minDate = new Date(this.maxDate.getFullYear() - 150, this.maxDate.getMonth());
  public genders: any[] = [
    {value: 'M', label: 'Masculino'},
    {value: 'F', label: 'Feminino'}
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.accessDataForm = this.formBuilder.group({
      email: ['', [Validators.email]],
      name: ['', [
        Validators.required,
        Validators.pattern(/^[a-z çáâãàéêẽèóôõòíîĩìùûũúA-Z0-9]+$/),
        Validators.maxLength(50),
        Validators.minLength(7)]
      ],
      cpf: ['', [Validators.required, Validators.minLength(11), GenericValidator.isValidCpf()]],
      gender: ['', [Validators.maxLength(1)]],
      birthday: ['', [Validators.required, Validators.minLength(8)]],
      naturalness: ['', [Validators.maxLength(50)]],
      nationality: ['', [Validators.maxLength(50)]],
    });
  }

  get f(): any { return this.accessDataForm.controls; }

}
