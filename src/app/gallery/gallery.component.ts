import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GalleryService } from '../gallery.service';

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
    // this.fixName();
  }

  private getFiles() {
    this.galleryService.getFiles(this.path).subscribe(files => {
      this.files = files;
    });
  }

  private getPaths() {
    this.eventName = this.route.snapshot.paramMap.get('event');
    this.path = 'events/trips/' + this.eventName;
    this.fixName();
  }

  private fixName() {
    let res = '';
    const temp: string = this.eventName;
    // If there is a number, i.e. year, in the filename, insert a space and append 20 to the beginning.
    if (temp.search('\\d') !== -1) {
      res += temp.slice(0, temp.search('\\d')) + ' 20' + temp.slice(temp.search('\\d'), temp.length);
    } else {
      res = temp;
    }
    res = res.replace(res[0], res[0].toUpperCase());
    this.eventName = res;
  }
}
