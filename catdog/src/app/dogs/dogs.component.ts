import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any = []
  showmanager: boolean = false
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    const observable = this._httpService.getDogs()
    observable.subscribe(dogs => {
      this.dogs = dogs
    })
    
    
  }

  togglemanager(){
    this.showmanager = !this.showmanager
  }


}