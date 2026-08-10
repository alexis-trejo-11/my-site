import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../shared/header/header';
import { CONTACT_LINKS, PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-contact',
  imports: [Header, RouterLink],
  templateUrl: './contact.html',
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
export class Contact {
  readonly profile = PROFILE;
  readonly contactLinks = CONTACT_LINKS;
  readonly offDutyItems = PROFILE.offDuty.items;
}
