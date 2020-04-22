import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/domain/auth.services';
import { subscribeOn } from 'rxjs/operator/subscribeOn';


@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email : "",
    senha: "",
  };

  constructor(
    public navCtrl: NavController,
    public menu  : MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
    ionViewDidLeave() {
    this.menu.swipeEnable(true);
    }


  

  login() {
    this.auth.authenticate(this.creds)
    .subscribe(reponse =>{
      this.auth.successfulLogin(reponse.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error =>{});
    
    
   
  }
}
