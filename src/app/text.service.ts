import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 * Service meant to retrieve text of certain events.
 */
export class TextService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get text associated with the parameter.
   * @param item the item we want the content for.
   */
  public getText(item: string): Observable<string> {
    return this.http.get<string>('getText.php?i=' + item);
  }
}
