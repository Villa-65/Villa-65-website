import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[];

  constructor(
    private service: PeopleService
  ) {
  }

  ngOnInit() {
    this.service.getPeople().subscribe(people => {
      this.people = people;
    });
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
