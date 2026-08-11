import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';
import { ApiTester } from './pages/api-tester/api-tester';
import { Notes } from './pages/notes/notes';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'projects/:slug',
    component: Projects,
  },
  {
    path: 'projects/:slug/:section',
    component: Projects,
  },
  {
    path: 'skills',
    component: Skills,
  },
  {
    path: 'skills/:id',
    component: Skills,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'api-tester',
    component: ApiTester,
  },
  {
    path: 'api-tester/:id',
    component: ApiTester,
  },
  {
    path: 'notes',
    component: Notes,
  },
  {
    path: 'notes/:id',
    component: Notes,
  },
];
