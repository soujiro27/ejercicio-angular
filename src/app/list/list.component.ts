import { Component, OnInit } from '@angular/core';
import data from '../../assets/users.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

 users = data.users;
 loader = false;
ldataLoading = ()=>{
  setTimeout(() => {
    this.loader = true
  },3000);
  }
constructor(){
  this.ldataLoading()
;}

ngOnInit(): void {
}
}
