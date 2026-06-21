import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-work-hours-crud',
  templateUrl: './work-hours-crud.component.html',
  styleUrls: ['./work-hours-crud.component.css']
})
export class WorkHoursCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Working Hours',
      icon: 'access_time',
      routeUrl: '/workhours'
    }
   }

  ngOnInit(): void {
  }

  navigateToWorkHourCreate(): void {
    this.router.navigate(['/workhours/create']);
  }

}
