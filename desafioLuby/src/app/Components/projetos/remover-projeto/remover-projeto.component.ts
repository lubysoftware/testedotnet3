import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetoModel } from 'src/app/models/projeto';
import { ProjetosComponent } from 'src/app/Pages/projetos/projetos.component';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-remover-projeto',
  templateUrl: './remover-projeto.component.html',
  styleUrls: ['./remover-projeto.component.css']
})
export class RemoverProjetoComponent {

  constructor(
    public dialogRef: MatDialogRef<ProjetosComponent>,
    @Inject(MAT_DIALOG_DATA) public projeto: ProjetoModel,
    private readonly projetosService: ProjetosService,
    private readonly showMessageService: ShowMessageService
  ) { }

  public cancel(projeto?: ProjetoModel): void {
    this.dialogRef.close({ item: projeto });
  }

  public delete(): void {
    this.projetosService.delete(this.projeto.id).subscribe(() => {
      this.showMessageService.showMessage('Projeto removido com sucesso');
      this.cancel(this.projeto);
    });
  }
}
