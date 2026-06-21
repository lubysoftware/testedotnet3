import { ProjectService } from './../project.service';
import { Project } from '../project.model'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-read',
  templateUrl: './project-read.component.html',
  styleUrls: ['./project-read.component.css']
})
export class ProjectReadComponent implements OnInit {

  projects: MatTableDataSource<Project>;
  displayedColumns = ['id','projectName', 'projectDescription', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.read().subscribe(data =>{
      this.projects = new MatTableDataSource(data);
      this.projects.sort = this.sort;
      this.projects.paginator = this.paginator;
    });
  }

}
