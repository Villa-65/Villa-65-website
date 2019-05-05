import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private PHPfile: string = "getFiles.php?f=";

  constructor(
    private http: HttpClient
  ) {
  }

  getFiles(path: string): Observable<string[]> {
    return this.http.get<string[]>(this.PHPfile + path);
  }
}
