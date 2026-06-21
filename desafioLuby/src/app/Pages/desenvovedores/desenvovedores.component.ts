import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EdicaoDesenvovedorComponent } from 'src/app/Components/desenvolvedores/edicao-desenvovedor/edicao-desenvovedor.component';
import { NovoDesenvovedorComponent } from 'src/app/Components/desenvolvedores/novo-desenvovedor/novo-desenvovedor.component';
import { RemoverDesenvovedorComponent } from 'src/app/Components/desenvolvedores/remover-desenvovedor/remover-desenvovedor.component';
import { DesenvolvedorModel } from 'src/app/models/desenvolvedor';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-desenvovedores',
  templateUrl: './desenvovedores.component.html',
  styleUrls: ['./desenvovedores.component.css']
})
export class DesenvovedoresComponent {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private desenvolvedores: Array<DesenvolvedorModel> = new Array<DesenvolvedorModel>();
  public displayedColumns = ['nome', 'idade', 'github', 'tecnologias', 'action'];
  public dataSource = new MatTableDataSource<DesenvolvedorModel>(this.desenvolvedores);

  constructor(
    private readonly headerService: HeaderService,
    private readonly desenvolvedoresService: DesenvolvedoresService,
    public dialog: MatDialog
  ) {

    this.headerService.headerData = {
      title: 'Desenvolvedores',
      icon: 'person',
      routeUrl: 'desenvolvedores'
    }
    this.getDesenvolvedores();
  }

  ngAfterViewInit() {
    this.configPaginate();
  }

  private getDesenvolvedores(): void {
    this.desenvolvedoresService.getAll().subscribe(res => {
      this.dataSource.data = res;
      this.desenvolvedores = res;
    });
  }

  public async addNewCampanha() {
    const dialogRef = this.dialog.open(NovoDesenvovedorComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (!res)
        return;
      else {
        this.dataSource.data.push(res.item);
        this.configPaginate();
      }

    });
  }

  public async openEditModal(desenvolvedor: DesenvolvedorModel) {
    const dialogRef = this.dialog.open(EdicaoDesenvovedorComponent, {
      data: desenvolvedor
    });

    dialogRef.afterClosed().subscribe(result => {
      const index = this.dataSource.data.indexOf(result.item);
      if (index !== -1) {
        this.dataSource.data.splice(index, 1, result.item);
        this.configPaginate();
      }
    });
  }

  public openExcludeModal(desenvolvedor: DesenvolvedorModel): void {
    const dialogRef = this.dialog.open(RemoverDesenvovedorComponent, {
      data: desenvolvedor
    });

    dialogRef.afterClosed().subscribe(result => {
      const index = this.dataSource.data.indexOf(result.item);
      if (index !== -1) {
        this.dataSource.data.splice(index, 1);
        this.configPaginate();
      }
    });
  }

  private configPaginate(): void {
    this.dataSource = new MatTableDataSource<DesenvolvedorModel>(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
