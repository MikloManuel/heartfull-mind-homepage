import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'heartfull-mind', pathMatch: 'full' },
  { path: 'heartfull-mind', loadComponent: () => import('../app/child-orgs/heartfull-mind').then(m => m.HeartfullMindComponent), title: 'Heartfull Mind' },
  { path: 'create-your-humanity', loadComponent: () => import('../app/child-orgs/create-your-humanity').then(m => m.CreateYourHumanityComponent), title: 'Create Your Humanity' },
  { path: 'create-your-events', loadComponent: () => import('../app/child-orgs/create-your-events').then(m => m.CreateYourEventsComponent), title: 'Create Your Event' },
  { path: 'create-your-ideas', loadComponent: () => import('../app/child-orgs/create-your-ideas').then(m => m.CreateYourIdeasComponent), title: 'Create Your Ideas' },
  { path: 'create-your-senses', loadComponent: () => import('../app/child-orgs/create-your-senses').then(m => m.CreateYourSensesComponent), title: 'Create Your Senses' },
  { path: 'really-fair', loadComponent: () => import('../app/child-orgs/really-fair').then(m => m.ReallyFairOrgComponent), title: 'Really Fair' },
];
