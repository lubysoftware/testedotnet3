import { WorkHoursService } from './../work-hours.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkHours } from '../work-hours.model';

@Component({
  selector: 'app-work-hours-read',
  templateUrl: './work-hours-read.component.html',
  styleUrls: ['./work-hours-read.component.css']
})
export class WorkHoursReadComponent implements OnInit {

  workHours: MatTableDataSource<WorkHours>;
  displayedColumns = ['id', 'dateInit', 'dateEnd', 'devName'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private workHoursService: WorkHoursService) { }

  ngOnInit(): void {
    this.workHoursService.read().subscribe(data => {
      this.workHours = new MatTableDataSource(data);
      this.workHours.sort = this.sort;
      this.workHours.paginator = this.paginator;
    });
  }

}
