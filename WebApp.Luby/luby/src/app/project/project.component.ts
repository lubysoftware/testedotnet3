import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from 'src/app/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: any;
  currentData = null;
  currentIndex = -1;
  title = '';

  constructor(private myService: ProjectService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(): void {
    this.myService.getAll()
      .subscribe(
        data => {
          this.project = data;
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
          this.project = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
