import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DeveloperService } from './../developer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Developer } from '../developer.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-developer-read',
  templateUrl: './developer-read.component.html',
  styleUrls: ['./developer-read.component.css']
})
export class DeveloperReadComponent implements OnInit {

  developers: MatTableDataSource<Developer>;
  displayedColumns = ['id', 'fullName', 'email', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.developerService.read().subscribe(data => {      
        this.developers = new MatTableDataSource(data);
        this.developers.sort = this.sort;
        this.developers.paginator = this.paginator;
      });
  };  

}

