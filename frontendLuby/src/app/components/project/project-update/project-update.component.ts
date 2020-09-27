import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  project: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.readById(id).subscribe(data => {
      this.project = data;
    });
  }

  updateProject(): void {
    this.projectService.update(this.project).subscribe(() => {
      this.projectService.showMessage("Project successfully updated.");
      this.router.navigate(['/projects']);
    });
  }

  cancel(): void {
    this.router.navigate(['/projects']);
  }

}
