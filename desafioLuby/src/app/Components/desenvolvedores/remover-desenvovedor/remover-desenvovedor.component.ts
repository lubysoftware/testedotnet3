import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DesenvolvedorModel } from 'src/app/models/desenvolvedor';
import { DesenvovedoresComponent } from 'src/app/Pages/desenvovedores/desenvovedores.component';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-remover-desenvovedor',
  templateUrl: './remover-desenvovedor.component.html',
  styleUrls: ['./remover-desenvovedor.component.css']
})
export class RemoverDesenvovedorComponent {

  constructor(
    public dialogRef: MatDialogRef<DesenvovedoresComponent>,
    @Inject(MAT_DIALOG_DATA) public desenvolvedor: DesenvolvedorModel,
    private readonly desenvolvedoresService: DesenvolvedoresService,
    private readonly showMessageService: ShowMessageService
  ) { }

  public cancel(desenvolvedor?: DesenvolvedorModel): void {
    this.dialogRef.close({ item: desenvolvedor });
  }

  public delete(): void {
    this.desenvolvedoresService.delete(this.desenvolvedor.id).subscribe(() => {
      this.showMessageService.showMessage('Desenvolvedor removido com sucesso');
      this.cancel(this.desenvolvedor);
    });
  }
}
