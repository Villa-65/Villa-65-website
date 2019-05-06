import {Component, OnInit, Inject} from '@angular/core';
import {Location, DOCUMENT} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {PEOPLE} from '../people';
import {Person} from '../person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person: Person;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit() {
    this.getPerson();
    this.document.body.scrollTop = 0;
  }

  private getPerson() {
    const personName = this.route.snapshot.paramMap.get('name');
    this.person = PEOPLE.find(person => person.name === personName);
  }

  private goBack() {
    this.location.back();
  }
}
