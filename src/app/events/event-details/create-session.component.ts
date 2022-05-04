import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from 'src/app/shared/models/event.model';
import { restrictedWords } from 'src/app/shared/validators/restricted-words.validator';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css'],
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  invalidForm = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar', 'athon']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveSession(formValues: any) {
    if (this.newSessionForm.valid) {
      const session: ISession = {
        id: 0,
        name: formValues.name,
        duration: +formValues.duration,
        level: formValues.level,
        presenter: formValues.presenter,
        abstract: formValues.abstract,
        voters: [],
      };
      this.saveNewSession.emit(session);
    } else {
      this.invalidForm = true;
    }
  }
}
