import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {

  },
  {
    title: true,
    name: 'Management Services'
  },

  {
    name: 'Alertes',
    url: '/alerte',
    iconComponent: { name: 'cil-bell' },
    },
  {
    name: 'User Management',
    url: '/usermanagement',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Domain Control',
    url: '/domaincontrol',
    iconComponent: { name: 'cil-puzzle' },  },
  {
    name: 'Ra Rule',
    url: '/rarule',
    iconComponent: { name: 'cil-cursor' },  },

  {
    name: 'Revenue Stream',
    url: '/revenuestream',
    iconComponent: { name: 'cil-chart-pie' }
  },
   ];
