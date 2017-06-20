import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Hero } from './hero-class';
import { HeroService } from './hero.service';

/**
 * Generated class for the HeroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-hero',
  templateUrl: 'hero.html',
})

export class HeroPage {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroPage');
  }

}
