import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'tickets',
    loadComponent: () =>
      import('./pages/tickets/tickets.component').then(
        (m) => m.TicketsComponent
      ),
  },
  {
    path: 'code-of-conduct',
    loadComponent: () =>
      import('./pages/code-of-conduct/code-of-conduct.component').then(
        (m) => m.CodeOfConductComponent
      ),
  },
  {
    path: 'speakers',
    loadComponent: () =>
      import('./pages/speakers/speakers.component').then(
        (m) => m.SpeakersComponent
      ),
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('./pages/photo-frame/photo-frame.component').then(
        (m) => m.PhotoFrameComponent
      ),
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./pages/teams/teams.component').then((m) => m.TeamsComponent),
  },,
  {
    path: 'schedule',
    loadComponent: () =>
      import('./pages/schedule/schedule.component').then((m) => m.ScheduleComponent),
  },
];
