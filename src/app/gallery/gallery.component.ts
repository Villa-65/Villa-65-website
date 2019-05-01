import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  path: string;
  files: string[];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPaths();
  }
  private getPaths() {
    const eventName = this.route.snapshot.paramMap.get('event');
    this.path = '/events/trips/' + eventName;
  }

  // private getFiles() {
  //   const fs = require('fs');
  //   fs.readdirSync(this.path).forEach(file => {this.files.push(file);
  //   });
  // }

  private goBack() {
    this.location.back();
  }
}
