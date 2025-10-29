import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { LoadingService } from '../../services/loading.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `<ul class="layout-menu">
    <ng-container *ngFor="let item of model; let i = index">
      <li
        app-menuitem
        *ngIf="!item.separator"
        [item]="item"
        [index]="i"
        [root]="true"
      ></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul> `,
})
export class AppMenu {
  model: MenuItem[] = [];
  auth = inject(AuthService);

  ngOnInit() {
    const role = this.auth.getUserSubbject().role;

    this.model = [
      {
        label: 'Início',
        items: [
          {
            label: 'Painel Principal',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/client/home'],
          },
        ],
      },
      {
        label: 'Cadastros',
        items: [
          {
            label: 'Base de Dados',
            items: [
              {
                label: 'Banco Contas',
                items: [
                  {
                    label: 'Gerenciar Bancos',
                    icon: 'pi pi-building',
                    routerLink: ['/client/banco'],
                  },
                  {
                    label: 'Gerenciar Agências',
                    icon: 'pi pi-sitemap',
                    routerLink: ['/client/agencia'],
                  },
                ],
              },
              {
                label: 'Banco Geral',
                items: [
                  {
                    label: 'Técnicos',
                    icon: 'pi pi-users',
                    routerLink: ['/client/tecnico'],
                  },
                  {
                    label: 'Projetistas',
                    icon: 'pi pi-pencil',
                    routerLink: ['/client/projetista'],
                  },
                ],
              },
              {
                label: 'Banco de Clientes',
                items: [
                  {
                    label: 'Perfis de Clientes',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/perfilcliente'],
                  },
                  {
                    label: 'Segmentação de Clientes',
                    icon: 'pi pi-filter',
                    routerLink: ['/client/segmentacaocliente'],
                  },
                  {
                    label: 'Classificação',
                    icon: 'pi pi-chart-line',
                    routerLink: ['/client/scoreinterno'],
                  },
                  {
                    label: 'Relacionamento com Clientes',
                    icon: 'pi pi-users',
                    routerLink: ['/client/relacionamentocliente'],
                  },
                  {
                    label: 'Estrutura de Propriedades',
                    icon: 'pi pi-sitemap',
                    routerLink: ['/client/estruturapropriedade'],
                  },
                  {
                    label: 'Cultura do Cliente',
                    icon: 'pi pi-sitemap',
                    routerLink: ['/client/culturaprincipalcliente'],
                  },
                ],
              },
              {
                label: 'Banco de Projetos',
                items: [
                  {
                    label: 'Tipo de Crédito',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/tipocredito'],
                  },
                  {
                    label: 'Crédito Rural',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/tipocreditorural'],
                  },
                  {
                    label: 'Linha de Crédito',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/linhacredito'],
                  },
                  {
                    label: 'Tipo de Consorcio',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/tipoconsorcio'],
                  },
                  {
                    label: 'Categoria Crédito Pessoal',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/categoriacreditopessoal'],
                  },
                  {
                    label: 'Chave Crédito Pessoal',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/chavecreditopessoal'],
                  },
                  {
                    label: 'Vendedor Crédito Pessoal',
                    icon: 'pi pi-id-card',
                    routerLink: ['/client/vendedorcreditopessoal'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Gerenciar Clientes',
            icon: 'pi pi-id-card',
            routerLink: ['/client/cliente'],
          },
          {
            label: 'Gerenciar Projetos',
            icon: 'pi pi-id-card',
            routerLink: ['/client/projeto'],
          },
          {
            label: 'Área de Visitas',
            icon: 'pi pi-id-card',
            routerLink: ['/client/areavisita'],
          },
          {
            label: 'Relatorios',
            icon: 'pi pi-chart-bar',
            routerLink: ['/client/relatorios'],
            items: [
              {
                label: 'Relatórios Gerais',
                icon: 'pi pi-file',
                routerLink: ['/client/relatoriogeral'],
              },
              {
                label: 'Relatórios de Projetos',
                icon: 'pi pi-file',
                routerLink: ['/client/relatorioprojeto'],
              },
              {
                label: 'Relatórios de Fechamento',
                icon: 'pi pi-file',
                routerLink: ['/client/relatoriofechamento'],
              },
            ],
          },
        ],
      },
    ];

    if (role === 'ROLE_ADMIN') {
      this.model.push({
        label: 'Administração',
        items: [
          {
            label: 'Tipo de Serviço',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/admin/tiposervico'],
          },
          {
            label: 'Relatório Administrativo',
            icon: 'pi pi-address-book',
            items: [
              {
                label: 'Relatório Agronegócios',
                icon: 'pi pi-book',
                routerLink: ['/admin/projetocreditoruralvisualizacao'],
              },
              {
                label: 'Relatório Consórcio',
                icon: 'pi pi-book',
                routerLink: ['/admin/projetoconsorciovisualizacao'],
              },
              {
                label: 'Relatório Crédito Pessoal',
                icon: 'pi pi-book',
                routerLink: ['/admin/projetocreditopessoalvisualizacao'],
              },
              {
                label: 'Relatório Abertura de Contas',
                icon: 'pi pi-book',
                routerLink: ['/admin/projetoaberturacontavisualizacao'],
              },
              {
                label: 'Resumo por Projetista',
                icon: 'pi pi-book',
                routerLink: ['/admin/resumoprojetistavisualizacao'],
              },
              {
                label: 'Resumo Visitas',
                icon: 'pi pi-book',
                routerLink: ['/admin/resumovisitavisualizacao'],
              },
            ],
          },
          {
            label: 'Parâmetros',
            icon: 'pi pi-chart-bar',
            routerLink: ['/client/relatorios'],
            items: [
              {
                label: 'Categoria do Parâmetro',
                icon: 'pi pi-fw pi-bookmark',
                routerLink: ['/admin/categoriaparametro'],
              },
              {
                label: 'Parâmetro do Sistema',
                icon: 'pi pi-fw pi-bookmark',
                routerLink: ['/admin/parametromaster'],
              },
            ],
          },

          {
            label: 'Permissões',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/admin/role'],
          },
          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/admin/usuario'],
          },
        ],
      });
    }
  }
}
