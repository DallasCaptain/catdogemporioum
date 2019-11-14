import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcats',
  templateUrl: './showcats.component.html',
  styleUrls: ['./showcats.component.css']
})
export class ShowcatsComponent implements OnInit {
  caturl:any 
  constructor(private _route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
     this.caturl = params['catname']
  });
  }

}
