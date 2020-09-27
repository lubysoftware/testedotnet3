import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project.service';
import { Project } from './../project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {

  project: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.readById(id).subscribe(data => {
      this.project = data;
    })
  }

  deleteProject(): void {
    this.projectService.delete(this.project.id.toString()).subscribe(() => {
      this.projectService.showMessage('Project successfully deleted.');
      this.router.navigate(['/projects']);
    });
  }

  cancel(): void {
    this.router.navigate(['/projects']);
  }

}
