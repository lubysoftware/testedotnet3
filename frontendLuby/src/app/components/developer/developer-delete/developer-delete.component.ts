import { Developer } from './../developer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DeveloperService } from './../developer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-delete',
  templateUrl: './developer-delete.component.html',
  styleUrls: ['./developer-delete.component.css']
})
export class DeveloperDeleteComponent implements OnInit {

  developer: Developer;

  constructor(
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.developerService.readById(id).subscribe(data => {
      this.developer = data;
    });
  }

  deleteDeveloper(): void {
    this.developerService.delete(this.developer.id.toString()).subscribe( () => {
      this.developerService.showMessage("Developer removed successfully.");
      this.router.navigate(['/developers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/developers']);
  }

}
