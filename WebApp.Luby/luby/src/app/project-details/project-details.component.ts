import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  currentData = null;
  message = '';

  constructor(
    private myService: ProjectService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getData(this.route.snapshot.paramMap.get('id'));
  }

  getData(id): void {
    this.myService.get(id)
      .subscribe(
        data => {
          this.currentData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateData(): void {
    const data = {
      project_name: this.currentData.project_name,
      project_description: this.currentData.project_description
    };
    this.myService.update(this.currentData.project_id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteData(): void {
    this.myService.delete(this.currentData.project_id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/projects']);
        },
        error => {
          console.log(error);
        });
  }
}
