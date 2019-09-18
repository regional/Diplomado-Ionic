import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NewsServices } from '../../services/news.services';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
 
})
export class NewsdetailPage {
  newsData: any;
  headLine: any;
  description: any;
  image: any;
  url: any;
  constructor(public events:Events,public auth: AuthServiceProvider,public service: NewsServices,public navCtrl: NavController, public navParams: NavParams) {
  
    this.headLine = this.navParams.get('title');
    this.description = this.navParams.get('desc');
    this.image = this.navParams.get('img');
    this.url = this.navParams.get('url');
  }

}
