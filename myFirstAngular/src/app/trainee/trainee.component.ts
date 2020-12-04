import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainee',
  template: `<app-team></app-team>`,
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
  }
}
