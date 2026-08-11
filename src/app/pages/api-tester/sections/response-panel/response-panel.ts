import { Component } from '@angular/core';

@Component({
  selector: 'app-response-panel',
  imports: [],
  templateUrl: './response-panel.html',
  styles: `
    :host {
      display: none;
    }

    @media (min-width: 1024px) {
      :host {
        display: contents;
      }
    }
  `,
})
export class ResponsePanel {}
