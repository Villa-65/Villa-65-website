import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = PEOPLE;

  constructor() { }

  ngOnInit() {
  }

}
