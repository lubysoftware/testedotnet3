import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NovoLancamentoComponent } from 'src/app/Components/lancamentos/novo-lancamento/novo-lancamento.component';
import { RemoverLancamentoComponent } from 'src/app/Components/lancamentos/remover-lancamento/remover-lancamento.component';
import { LancamentoModel } from 'src/app/models/lancamento';
import { HeaderService } from 'src/app/services/header.service';
import { LancamentosService } from 'src/app/services/lancamentos.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private lancamentos: Array<LancamentoModel> = new Array<LancamentoModel>();
  public displayedColumns = ['projeto', 'desenvolvedor', 'dataInicio', 'dataFim', 'action'];
  public dataSource = new MatTableDataSource<LancamentoModel>(this.lancamentos);

  constructor(
    private readonly headerService: HeaderService,
    private readonly lancamentosService: LancamentosService,
    public dialog: MatDialog
  ) {

    this.headerService.headerData = {
      title: 'Lançamentos',
      icon: 'person',
      routeUrl: 'lancamentos'
    }
    this.getAllLancamentos();
  }
  ngAfterViewInit() {
    this.configPaginate();
  }

  private getAllLancamentos(): void {
    this.lancamentosService.getAll().subscribe(res => {
      this.dataSource.data = res;
      this.lancamentos = res;
    });
  }

  private configPaginate(): void {
    this.dataSource = new MatTableDataSource<LancamentoModel>(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public async addNewLancamento() {
    const dialogRef = this.dialog.open(NovoLancamentoComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (!res)
        return;
      else {
        this.dataSource.data.push(res.item);
        this.configPaginate();
      }
    });
  }

  public openExcludeModal(lancamento: LancamentoModel): void {
    const dialogRef = this.dialog.open(RemoverLancamentoComponent, {
      data: lancamento,
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
}
