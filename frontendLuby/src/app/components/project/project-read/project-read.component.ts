import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model'; 

@Component({
  selector: 'app-project-read',
  templateUrl: './project-read.component.html',
  styleUrls: ['./project-read.component.css']
})
export class ProjectReadComponent implements OnInit {

  projects: Project[];
  displayedColumns = ['id','projectName', 'projectDescription', 'action'];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.read().subscribe(data =>{
      this.projects = data;
    });
  }

}
