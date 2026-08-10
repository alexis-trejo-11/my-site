import { Component } from '@angular/core';

@Component({
  selector: 'app-response-panel',
  imports: [],
  templateUrl: './response-panel.html',
  styles: `
    :host {
      display: flex;
      flex-shrink: 0;
      height: 100%;
      min-height: 0;
    }
  `,
})
export class ResponsePanel {}
