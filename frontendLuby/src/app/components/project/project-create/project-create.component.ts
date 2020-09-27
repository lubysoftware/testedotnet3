import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  project: Project = {
    projectName: '',
    projectDescription: ''
  }

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  createProject(): void {
    this.projectService.create(this.project).subscribe(() => {
      this.projectService.showMessage("Project successfully created.");
      this.router.navigate(["/projects"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/projects"]);
  }

}
