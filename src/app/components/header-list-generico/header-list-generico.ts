import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ColumnConfig {
  field: string;
  header: string;
  filterPlaceholder?: string;
  minWidth?: string;
  filterType?: 'text' | 'date' | 'numeric' | 'boolean';
  formatter?: (value: any, row?: any) => string;
}

export interface ActionConfig {
  icon: string;
  label?: string;
  severity?: ButtonSeverity;
  rounded?: boolean;
  outlined?: boolean;
  onClick: (row: any) => void;
}

@Component({
  selector: 'app-header-list-generico',
  imports: [
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './header-list-generico.html',
  styleUrl: './header-list-generico.scss',
})
export class HeaderListGenerico {
  @Input() title = '';
  @Input() value: any[] = [];
  @Input() columns: ColumnConfig[] = [];
  @Input() actions: ActionConfig[] = [];
  @Input() loading = false;

  @Output() add = new EventEmitter<void>();
  @Output() clearFilters = new EventEmitter<void>();

  globalFilterFields: string[] = [];

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt') tabela!: Table;

  ngOnInit() {
    this.globalFilterFields = this.columns.map((c) => c.field);
  }

  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }

  onAdd() {
    this.add.emit();
  }

  onClearFilters(table: Table) {
    table.clear();
    if (this.filter) {
      this.filter.nativeElement.value = '';
    }
  }

  get listaFiltrada(): any[] {
    return this.tabela?.filteredValue ?? [];
  }

  get totalRegistro(): number {
    if (this.tabela?.filteredValue) {
      return this.tabela.filteredValue.length;
    }
    return this.value ? this.value.length : 0;
  }
  //TIPO FORMATACAO
  //  formatter: (value) => value ? 'Sim' : 'Não'
  //  formatter: (value) => `R$ ${value.toFixed(2)}`
  //    formatter: (value) => new Date(value).toLocaleDateString('pt-BR')
}
