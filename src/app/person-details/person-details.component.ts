import { Component, OnInit, Inject } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PeopleService } from '../people.service';

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
    @Inject(DOCUMENT) private document: Document,
    private peopleService: PeopleService,
  ) {
  }

  ngOnInit() {
    this.getPerson();
    this.document.body.scrollTop = 0;
  }

  private getPerson() {
    const personName = this.route.snapshot.paramMap.get('name');
    this.peopleService.getPeople().subscribe(res => this.person = res.find(p => p.name === personName));
  }
}
