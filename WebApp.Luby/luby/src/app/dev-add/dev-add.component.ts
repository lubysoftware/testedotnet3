import { Component, OnInit } from '@angular/core';
import {DevService} from '../dev.service';

@Component({
  selector: 'app-dev-add',
  templateUrl: './dev-add.component.html',
  styleUrls: ['./dev-add.component.css']
})
export class DevAddComponent implements OnInit {
  myData = {
    name: '',
    email: ''
  };
  submitted = false;

  constructor( private myService: DevService) { }

  ngOnInit(): void {}

  save(): void {
    const data = {
      name: this.myData.name,
      email: this.myData.email
    };

    this.myService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  store(): void {
    this.submitted = false;
    this.myData = {
      name: '',
      email: '',      
    };
  }

}
