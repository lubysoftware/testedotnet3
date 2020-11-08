import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  myData = {
    project_name: '',
    project_description: ''
  };
  submitted = false;

  constructor(private myService: ProjectService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
      project_name: this.myData.project_name,
      project_description: this.myData.project_description
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
      project_name: '',
      project_description: ''
    };
  }

}
