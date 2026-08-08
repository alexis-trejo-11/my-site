import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
