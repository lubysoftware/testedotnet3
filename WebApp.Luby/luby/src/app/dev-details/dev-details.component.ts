import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DevService} from '../dev.service';

@Component({
  selector: 'app-dev-details',
  templateUrl: './dev-details.component.html',
  styleUrls: ['./dev-details.component.css']
})
export class DevDetailsComponent implements OnInit {
currentData = null;
  message = '';

  constructor(
    private myService: DevService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getData(this.route.snapshot.paramMap.get('id'));
  }

  getData(id): void {
    this.myService.get(id)
      .subscribe(
        data => {
          this.currentData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateData(): void {
    const data = {
      name: this.currentData.name,
      email: this.currentData.email
    };
    this.myService.update(this.currentData.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteData(): void {
    this.myService.delete(this.currentData.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/devs']);
        },
        error => {
          console.log(error);
        });
  }
}
