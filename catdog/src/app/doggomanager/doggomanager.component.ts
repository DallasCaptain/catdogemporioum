import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-doggomanager',
  templateUrl: './doggomanager.component.html',
  styleUrls: ['./doggomanager.component.css']
})
export class DoggomanagerComponent implements OnInit {
  dog:any ={
    name:"",
    url:"",
    favoriteToy:""
}
  errs:any=[]
  @Input() dogs:any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  createDog(){
    //console.log(this.dog)
    let observable = this._httpService.createDog(this.dog)
    observable.subscribe(dog =>{
      //console.log(JSON.stringify(dog['err']))
      if(dog['err']){
        console.log(dog['err'])
        if(dog['err']['errors']['name'])
        this.errs.push(dog['err']['errors']['name'])
        if(dog['err']['errors']['url'])
        this.errs.push(dog['err']['errors']['url'])
        if(dog['err']['errors']['favoriteToy'])
        this.errs.push(dog['err']['errors']['favoriteToy'])



        console.log('found dog err', this.errs)
      }
      else{
        this.dogs.push(dog)
      this.dog ={
        name:"",
        url:"",
        favoriteToy:""
    }
      }
      
    })
  }
  
}
