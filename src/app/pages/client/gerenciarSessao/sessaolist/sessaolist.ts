import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BaseService } from '../../../../services/base.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionConfig,
  ColumnConfig,
  HeaderListGenerico,
} from '../../../../components/header-list-generico/header-list-generico';
import { Novasessao } from "../novasessao/novasessao";
@Component({
  selector: 'app-sessaolist',
  imports: [
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    HeaderListGenerico,
    Novasessao
],
  templateUrl: './sessaolist.html',
  styleUrl: './sessaolist.scss',
})
export class Sessaolist {
  loading: boolean = true;
  public listagem: any[] = [];
  public baseService = inject(BaseService);
  endpoint = 'whatsappsessao';
  primaryKey = 'id_whatsappsessao';
  router = inject(Router);
  private route = inject(ActivatedRoute);
  isDialog: boolean = false;
  idEdicao!: number;
  constructor(private cd: ChangeDetectorRef) {}

  columns: ColumnConfig[] = [
    {
      field: 'cd_empresa',
      header: 'Código',
      minWidth: '10rem',
      filterType: 'text',
    },
    {
      field: 'nm_empresa',
      header: 'Nome',
      minWidth: '15rem',
      filterType: 'text',
    },
    {
      field: 'nm_planoassinatura',
      header: 'Plano',
      minWidth: '15rem',
      filterType: 'text',
    },
    {
      field: 'fl_ativo',
      header: 'Status',
      minWidth: '15rem',
      filterType: 'boolean',
      formatter: (value) => (value ? 'Sim' : 'Não'),
    },
  ];

  actions: ActionConfig[] = [
    {
      icon: 'pi pi-pencil',
      rounded: true,
      outlined: true,
      onClick: (row) => this.onEdit(row),
    },
    {
      icon: 'pi pi-trash',
      severity: 'danger',
      rounded: true,
      outlined: true,
      onClick: (row) => this.onDelete(row),
    },
  ];

  onAdd() {
    this.idEdicao = 0;
    this.isDialog = true;
  }

  ngOnInit(): void {
    this.onShow();
  }

  onShow = () => {
    this.loading = true;

    this.baseService.findAll(`${this.endpoint}/`).subscribe({
      next: (res) => {
        console.log(res);
        // const novaListagem: Empresa[] = [];
        // Object.values(res as any).forEach((index: any) => {
        //   let item = new Empresa();
        //   item = index;
        //   novaListagem.push(item);
        // });
        // this.listagem = novaListagem;
        this.loading = false;
        this.cd.markForCheck();
      },
      error: (err) => {
        this.loading = false;
        this.cd.markForCheck();
      },
    });
  };

  onEdit(item: any) {
    if (item && item[this.primaryKey]) {
      this.idEdicao = item[this.primaryKey];
      this.isDialog = true;
    } else {
      console.error('ID está indefinido');
    }
  }

  onDelete(item: any) {
    this.loading = true;
    this.baseService.deleteById(`${this.endpoint}`, item[this.primaryKey]).subscribe({
      next: (res) => {
        this.loading = false;
        this.onShow();
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }
}
