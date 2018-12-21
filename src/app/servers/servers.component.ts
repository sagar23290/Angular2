import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Input() title:string;
  constructor() { }
  name :string = "Test Name";
  
  getname(){
   this.name = "Sagar" + this.title;
  }

  ngOnInit() {
  }

}
