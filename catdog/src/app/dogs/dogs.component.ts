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

  hovered(event){
    event.target.parentElement.parentElement.style.backgroundColor = 'firebrick';
    event.target.parentElement.parentElement.firstChild.style.fontSize = '2em';
    event.target.parentElement.parentElement.lastChild.style.fontSize = '2em';
    event.target.style.width = '150px';
    event.target.style.height = '150px'
    
  }
  unhovered(event){
    event.target.parentElement.parentElement.style.backgroundColor = 'white';
    event.target.parentElement.parentElement.firstChild.style.fontSize = '1em';
    event.target.parentElement.parentElement.lastChild.style.fontSize = '1em';
    event.target.style.width = '75px';
    event.target.style.height = '75px';
    console.log(event)
  }

}