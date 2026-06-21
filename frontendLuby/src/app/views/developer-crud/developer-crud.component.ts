import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-crud',
  templateUrl: './developer-crud.component.html',
  styleUrls: ['./developer-crud.component.css']
})
export class DeveloperCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Developers',
      icon: 'person',
      routeUrl: '/developers'
    }
  }

  ngOnInit(): void {
  }

  navigateToDeveloperCreate(): void {
    this.router.navigate(['/developers/create']);
  }

}
