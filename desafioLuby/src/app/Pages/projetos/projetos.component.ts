import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EdicaoProjetoComponent } from 'src/app/Components/projetos/edicao-projeto/edicao-projeto.component';
import { NovoProjetoComponent } from 'src/app/Components/projetos/novo-projeto/novo-projeto.component';
import { RemoverProjetoComponent } from 'src/app/Components/projetos/remover-projeto/remover-projeto.component';
import { ProjetoModel } from 'src/app/models/projeto';
import { HeaderService } from 'src/app/services/header.service';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private projetos: Array<ProjetoModel> = new Array<ProjetoModel>();
  public displayedColumns = ['nome', 'descricao', 'desenvolvedor', 'action'];
  public dataSource = new MatTableDataSource<ProjetoModel>(this.projetos);


  constructor(
    private readonly headerService: HeaderService,
    private readonly projetosService: ProjetosService,
    public dialog: MatDialog
  ) {

    this.headerService.headerData = {
      title: 'Projetos',
      icon: 'emoji_objects',
      routeUrl: 'projetos'
    }
    this.getProjetos();
  }

  ngAfterViewInit() {
    this.configPaginate();
  }

  private getProjetos(): void {
    this.projetosService.getAll().subscribe(res => {
      this.dataSource.data = res;
      this.projetos = res;
    });
  }

  public async addNewProject() {
    const dialogRef = this.dialog.open(NovoProjetoComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (!res)
        return;
      else {
        this.dataSource.data.unshift(res.item);
        this.configPaginate();
      }

    });
  }

  public async openEditModal(projeto: ProjetoModel) {
    const dialogRef = this.dialog.open(EdicaoProjetoComponent, {
      data: projeto
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.indexOf(result.item);
        if (index !== -1) {
          this.dataSource.data.splice(index, 1, result.item);
          this.configPaginate();
        }
      }
    });
  }

  public openExcludeModal(projeto: ProjetoModel): void {
    const dialogRef = this.dialog.open(RemoverProjetoComponent, {
      data: projeto,
      width: '500px'

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.indexOf(result.item);
        if (index !== -1) {
          this.dataSource.data.splice(index, 1);
          this.configPaginate();
        }
      }
    });
  }

  private configPaginate(): void {
    this.dataSource = new MatTableDataSource<ProjetoModel>(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
