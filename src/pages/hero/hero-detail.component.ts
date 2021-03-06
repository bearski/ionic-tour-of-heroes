import { Component, Input } from '@angular/core';

import { Hero } from './hero-class';

@Component({
  selector: 'hero-detail',
  templateUrl: 'hero.html',
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
