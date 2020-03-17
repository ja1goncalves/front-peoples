import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GenericValidator } from 'src/app/helpers/validators';
import { GENDERS } from '../../config/consts';
import { People, RegisterPeople } from '../../models/people';
import {PeoplesService} from '../../services/peoples/peoples.service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  @Output() submitData: EventEmitter<any> = new EventEmitter<any>();
  @Input() accessDataForm: FormGroup;

  public submitted: boolean;
  public registerData: RegisterPeople;
  public people: People;
  public peoples: Array<People>;
  public maxDate = new Date();
  public minDate = new Date(this.maxDate.getFullYear() - 150, this.maxDate.getMonth());
  public genders: any[] = GENDERS;

  constructor(private formBuilder: FormBuilder,
              private register: PeoplesService,
              private notifier: NotifierService) {}

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

    this.getAllPeoples();
  }

  get f(): any { return this.accessDataForm.controls; }

  public getAllPeoples(): void {
    this.register.all().subscribe(
      (response: any) => {
        this.peoples = response;
      }, (error) => { }
    );
  }

  public accessDataSubmit(): void {
    if (this.accessDataForm.valid) {
      this.registerData = {
        name: this.accessDataForm.controls.name.value,
        gender: this.accessDataForm.controls.gender.value,
        email: this.accessDataForm.controls.email.value,
        birthday: this.accessDataForm.controls.email.value,
        cpf: this.accessDataForm.controls.cpf.value,
        naturalness: this.accessDataForm.controls.naturalness.value,
        nationality: this.accessDataForm.controls.nationality.value,
      };

      this.register.create(this.registerData).subscribe(
        (response: any) => {
          this.notifier.notify('success', `${response.name} foi adicionado!`);
        }, (error) => {
          this.notifier.notify('error', `A pessoa não pode ser adicionada!`);
        }
      );
    }

  }

}
