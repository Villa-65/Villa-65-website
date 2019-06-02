import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TextService} from "../text.service";

@Component({
  selector: 'app-textpage',
  templateUrl: './textpage.component.html',
  styleUrls: ['./textpage.component.css']
})
export class TextpageComponent implements OnInit {
  item: string;
  content: string;

  constructor(
    private route: ActivatedRoute,
    private service: TextService
    ) { }

  ngOnInit(
  ) {
    this.item = this.route.snapshot.paramMap.get('item');
    this.service.getText(this.item).subscribe(content => {
      this.content = content;
    });
  }

}
