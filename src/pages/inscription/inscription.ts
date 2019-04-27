import { Component } from '@angular/core'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})

export class InscriptionPage {

	ine: string;
	nom: string;
	prenom: string;
	date_naiss: Date;
	tel: string;
	login : string;
	password: string;

	constructor()
	{ 
	}


}




