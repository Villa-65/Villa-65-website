import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Text } from './Text';

@Injectable({
  providedIn: 'root'
})
/**
 * Service meant to retrieve text of certain events.
 */
export class TextService {

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Get text associated with the parameter.
   */
  public getText(): Observable<Text[]> {
    return this.http.get<Text[]>('text.JSON');
  }
}
