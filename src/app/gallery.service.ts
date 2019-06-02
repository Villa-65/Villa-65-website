import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private PHPfile = 'getFiles.php?f=';

  constructor(
    private http: HttpClient
  ) {
  }

  getFiles(path: string): Observable<string[]> {
    return this.http.get<string[]>(this.PHPfile + path);
  }
}
