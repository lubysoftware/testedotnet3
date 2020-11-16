import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/template/header/header.component';
import { FooterComponent } from './Components/template/footer/footer.component';
import { MenuComponent } from './Components/template/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { registerLocaleData } from '@angular/common';
import { DesenvovedoresComponent } from './Pages/desenvovedores/desenvovedores.component';
import { ProjetosComponent } from './Pages/projetos/projetos.component';
import { LancamentosComponent } from './Pages/lancamentos/lancamentos.component';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NovoDesenvovedorComponent } from './Components/desenvolvedores/novo-desenvovedor/novo-desenvovedor.component';
import { EdicaoDesenvovedorComponent } from './Components/desenvolvedores/edicao-desenvovedor/edicao-desenvovedor.component';
import { RemoverDesenvovedorComponent } from './Components/desenvolvedores/remover-desenvovedor/remover-desenvovedor.component';
import { NovoProjetoComponent } from './Components/projetos/novo-projeto/novo-projeto.component';
import { MatSelectModule } from '@angular/material/select';
import { EdicaoProjetoComponent } from './Components/projetos/edicao-projeto/edicao-projeto.component';
import { RemoverProjetoComponent } from './Components/projetos/remover-projeto/remover-projeto.component';
import { NovoLancamentoComponent } from './Components/lancamentos/novo-lancamento/novo-lancamento.component';
import { DateFormatPipe } from './shared/pipes/date-pipe';
import { RemoverLancamentoComponent } from './Components/lancamentos/remover-lancamento/remover-lancamento.component';
import { RankingsComponent } from './Pages/rankings/rankings.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DesenvovedoresComponent,
    ProjetosComponent,
    LancamentosComponent,
    NovoDesenvovedorComponent,
    RemoverDesenvovedorComponent,
    EdicaoDesenvovedorComponent,
    NovoProjetoComponent,
    EdicaoProjetoComponent,
    RemoverProjetoComponent,
    NovoLancamentoComponent,
    DateFormatPipe,
    RemoverLancamentoComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatGridListModule,
    ChartsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  },
  {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
