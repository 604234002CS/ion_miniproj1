import { DetailPage } from './../detail/detail';
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';

/**
 * Generated class for the NowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now',
  templateUrl: 'now.html',
})
export class NowPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowmovie: MoviesProvider) {
    this.loadnowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPage');

  }
loadnowdata(){
  this.nowmovie.getNow().subscribe(nowmovies =>{
    this.moviesArray=nowmovies['results'];
  });
}

getDetail(nowmovie){
  this.navCtrl.push("DetailPage",nowmovie);
}

Movieapp(){
  this.navCtrl.push(MoviesPage);
}

  

  
}