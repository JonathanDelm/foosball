import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors } from '@angular/forms';

const fourPlayerValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const p1 = control.get('team1Player2Control').value;
  const p2 = control.get('team2Player2Control').value;

  const result = ((p1 === '' || p1 === undefined) && !(p2 === '' || p2 === undefined)) ||
    (!(p1 === '' || p1 === undefined) && (p2 === '' || p2 === undefined));

  return result ? { threePlayer: true } : null;
};

const differentPlayerValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const p1 = control.get('team1Player1Control').value;
  const p2 = control.get('team1Player2Control').value;
  const p3 = control.get('team2Player1Control').value;
  const p4 = control.get('team2Player2Control').value;

  const result = ((!(p1 === '' || p1 === undefined) && (p1 === p2 || p1 === p3 || p1 === p4)) ||
     (!(p2 === '' || p2 === undefined) && (p2 === p3 || p2 === p4)) ||
      (!(p3 === '' || p3 === undefined) && (p3 === p4)));

  return result ? { doublePlayer: true } : null;
};

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  public match: FormGroup;
  players: string[] = ['Jonathan', 'Fien', 'Jasper', 'Isabel', 'Geert'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.match = this.fb.group({
      team1Player1Control: ['', Validators.required],
      team1Player2Control: [''],
      team2Player1Control: ['', Validators.required],
      team2Player2Control: [''],
      scoreTeam1: ['', Validators.required],
      scoreTeam2: ['', Validators.required]
    }, { validators: [fourPlayerValidator, differentPlayerValidator] });
  }

  onSubmit() {
    // TODO
  }


}
