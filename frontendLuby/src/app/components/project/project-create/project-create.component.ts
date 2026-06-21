import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  projectForm = new FormGroup({
    projectName: new FormControl('', Validators.required),
    projectDescription: new FormControl('', Validators.required)
  });

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  createProject(): void {
    this.projectService.create(this.projectForm.getRawValue()).subscribe(() => {
      this.projectService.showMessage("Project successfully created.");
      this.router.navigate(["/projects"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/projects"]);
  }

}
