import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { InscriptionPage } from '../inscription/inscription';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})

export class ConnexionPage {

	private login : string;
	private password: string;

	constructor(public navCtrl: NavController)
	{ 
	}

	public valider()
	{
		this.navCtrl.push(HomePage, {login: this.login, password: this.password });
		this.login = "";
		this.password = "";
	}


	public inscription()
	{
		this.navCtrl.push(InscriptionPage);
	}

}




