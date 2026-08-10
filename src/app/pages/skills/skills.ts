import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-skills',
  imports: [Header],
  templateUrl: './skills.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
    }
  `,
})
export class Skills {}
