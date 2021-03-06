import {Component, OnInit} from '@angular/core';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  constructor(
    private galleryService: GalleryService) {
  }
  tripsFiles: string[];
  traditionPaths: string[];

  ngOnInit() {
    this.getTrips();
    this.getTraditions();
  }

  private getTraditions() {
    this.galleryService.getFiles('events/traditions').subscribe(paths => {
      this.traditionPaths = paths;
    });
  }

  private getTrips() {
    this.galleryService.getFiles('events/trips/thumbs').subscribe(paths => {
      this.tripsFiles = paths;
    });
  }

  public getLink(file: string) {
    file = file.slice(0, file.search('[.]'));
    file = file.replace('events/trips/thumbs', '/events');
    return file;
  }

  public pathToName(path: string): string {
    let res = '';
    path = path.substring(path.lastIndexOf('/') + 1);
    const temp = path;
    // If there is a number, i.e. year, in the filename, insert a space and append 20 to the beginning.
    if (temp.search('\\d') !== -1) {
      res += temp.slice(0, temp.search('\\d')) + ' 20' + temp.slice(temp.search('\\d'), temp.length);
    } else {
      res = temp;
    }
    res = res.replace(res[0], res[0].toUpperCase());
    res = res.substring(0, res.indexOf('.'));
    return res;
  }
}
