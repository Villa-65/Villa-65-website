import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>('people.JSON');
  }
}
