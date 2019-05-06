import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  tripPaths: string[];
  tripsFiles: string[];
  firstTrip: string;
  traditionPaths: string[];
  firstTradition: string;

  constructor(
    private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.getTrips();
    this.getTraditions();
  }

  private getTraditions() {
    this.galleryService.getFiles('events/traditions').subscribe(paths => {
      this.traditionPaths = paths;
      console.log(this.traditionPaths);
      // this.firstTradition = this.traditionPaths.splice(0, 1)[0];
      // console.log(this.traditionPaths);
      // console.log(this.firstTradition);
    });
  }

  private getTrips() {
    this.galleryService.getFiles('events/trips/thumbs').subscribe(paths => {
      this.tripsFiles = paths;
      this.firstTrip = this.tripsFiles.splice(0, 1)[0];
      for (let i in this.tripsFiles) {
        this.tripPaths.push(this.getPath(i));
      }
    });
  }

  public getPath(file: string) {
    file.slice(0, file.search('[.]'));
    file.replace('/thumbs', '');
    return file;
  }
}
