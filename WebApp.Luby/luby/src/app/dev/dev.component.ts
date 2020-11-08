import {Component, OnInit} from '@angular/core';
import {DevService} from 'src/app/dev.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  dev: any;
  currentData = null;
  currentIndex = -1;
  title = '';

  constructor(private myService: DevService) {
  }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(): void {
    this.myService.getAll()
      .subscribe(
        data => {
          this.dev = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveData();
    this.currentData = null;
    this.currentIndex = -1;
  }

  removeData(): void {
    this.myService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveData();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.myService.findByTitle(this.title)
      .subscribe(
        data => {
          this.dev = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
