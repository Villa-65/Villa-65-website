import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  path: string;
  files: string[];
  eventName: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private galleryService: GalleryService
  ) {
  }

  ngOnInit() {
    this.getPaths();
    this.getFiles();
    console.log(this.files);
  }

  private getFiles() {
    this.galleryService.getFiles(this.path).subscribe(files => {
      this.files = files;
    });
  }

  private getPaths() {
    this.eventName = this.route.snapshot.paramMap.get('event');
    this.path = 'events/trips/' + this.eventName;
  }

  private goBack() {
    this.location.back();
  }
}
