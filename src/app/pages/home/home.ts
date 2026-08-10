import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, Header],
  templateUrl: './home.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      width: 100%;
      position: relative;
      isolation: isolate;
    }
  `,
})
export class Home {}
