import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  tripsFiles: string[];
  traditionPaths: string[];

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
    });
  }

  private getTrips() {
    this.galleryService.getFiles('events/trips/thumbs').subscribe(paths => {
      this.tripsFiles = paths;
    });
  }

  public getLink(file: string) {
    file = file.slice(0, file.search("[.]"));
    file = file.replace("events/trips/thumbs", "/events");
    return file;
  }
}
