import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkHours } from '../work-hours.model';
import { WorkHoursService } from '../work-hours.service';

@Component({
  selector: 'app-work-hours-rank',
  templateUrl: './work-hours-rank.component.html',
  styleUrls: ['./work-hours-rank.component.css']
})
export class WorkHoursRankComponent implements OnInit {

  workHours: MatTableDataSource<WorkHours>;
  displayedColumns = ['devName', 'workedHours'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private workHoursService: WorkHoursService) { }

  ngOnInit(): void {
    this.workHoursService.getWeekRank().subscribe(data => {
      this.workHours = new MatTableDataSource(data);
      this.workHours.sort = this.sort;
      this.workHours.paginator = this.paginator;
    });
  }
    
      
  

}
