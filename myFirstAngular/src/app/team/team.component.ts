import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-team]',
  templateUrl: './team.component.html',
  styles : [`h2{
    color: brown;
  }`]
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
