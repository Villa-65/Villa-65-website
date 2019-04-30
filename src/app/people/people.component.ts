import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../people';
import {Person} from '../person';

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

  public getBlurb(person: Person) {
    const blurb = person.story.slice(0, 50);
    if (blurb === person.story) {
      return blurb;
    } else {
      return blurb + '...';
    }
  }
}
