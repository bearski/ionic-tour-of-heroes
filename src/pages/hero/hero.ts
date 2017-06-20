import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 export class Hero {
   id: number;
   name: string;
 }

 const HEROES: Hero[] = [
   { id: 11, name: 'Mr. Nice' },
   { id: 12, name: 'Narco' },
   { id: 13, name: 'Bombasto' },
   { id: 14, name: 'Celeritas' },
   { id: 15, name: 'Magneta' },
   { id: 16, name: 'RubberMan' },
   { id: 17, name: 'Dynama' },
   { id: 18, name: 'Dr IQ' },
   { id: 19, name: 'Magma' },
   { id: 20, name: 'Tornado' }
 ];


@IonicPage()
@Component({
  selector: 'page-hero',
  templateUrl: 'hero.html',
})

export class HeroPage {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroPage');
  }

}
