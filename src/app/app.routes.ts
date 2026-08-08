import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';
import { ApiTester } from './pages/api-tester/api-tester';

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
    path: 'skills',
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
];
