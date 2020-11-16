import { Component } from '@angular/core';
import { RankingModel } from 'src/app/models/ranking';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {
  public rankings: Array<RankingModel>;
  public barChartLabels: Array<string>;
  public barChartData: Array<any>;
  public barChartType: any;
  public lineChartColors: any[];
  public barChartLegend: boolean;
  public barChartOptions: any;
  private horasTrabalhadas = [];
  constructor(
    private readonly rankingService: RankingService
  ) {
    this.rankings = new Array<RankingModel>();
    this.barChartLabels = new Array<string>();
    this.barChartData = new Array<any>();

    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
    };
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.lineChartColors = [
      {
        backgroundColor: "#5e72de",
        borderColor: "#8695e4"
      }
    ];
    this.getAll();
  }

  private getAll(): void {
    this.rankingService.getAll().subscribe(res => {

      res.forEach(item => {
        this.barChartLabels.push(item.desenvolvedor);
        this.horasTrabalhadas.push(item.horasTrabalhadas);
      });
      this.configGrafico();
    });
  }

  private configGrafico(): void {
    this.barChartData = [{
      data: this.horasTrabalhadas, label: 'Desenvolvedores', hoverBackgroundColor: "#8695e4",
      hoverBorderColor: "#8695e4"
    }]
  }
}
