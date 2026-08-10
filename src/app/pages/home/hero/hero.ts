import { Component } from '@angular/core';
import { PROFILE } from '../../../shared/profile';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
})
export class Hero {
  readonly profile = PROFILE;
}
