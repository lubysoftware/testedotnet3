import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from './../developer.service';
import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer.model';

@Component({
  selector: 'app-developer-update',
  templateUrl: './developer-update.component.html',
  styleUrls: ['./developer-update.component.css']
})
export class DeveloperUpdateComponent implements OnInit {

  developer: Developer;

  constructor(
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.developerService.readById(id).subscribe(data => {
      this.developer = data;
    })
  }

  updateDeveloper(): void {
    this.developerService.update(this.developer).subscribe(() =>{
      this.developerService.showMessage("Developer successfully updated.");
      this.router.navigate(['/developers']);
    });
  }

  cancel(): void {
    this.router.navigate(["/developers"]);
  }

}
