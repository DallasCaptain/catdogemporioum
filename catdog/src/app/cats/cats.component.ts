import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  selectedCat:any
  
  constructor() { }

  ngOnInit() {
  }

  setCat(catname:any){
    this.selectedCat = catname;
  }


}
