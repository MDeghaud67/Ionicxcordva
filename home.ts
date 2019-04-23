import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
import { HttpClient } from '@angular/common/http'; 
import { HttpHeaders } from '@angular/common/http'; 
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
import { Keyboard } from 'ionic-angular'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
	export class HomePage {

	public xmlItems : any;
	public login: string;
	public password: string;
  
	constructor(public navCtrl: NavController,
				public http: HttpClient,
				public navParams: NavParams,
				public keyboard: Keyboard)
	{ 	
	}

	ngOnInit()
	{
    	this.login = this.navParams.get('login');
    	this.password = this.navParams.get('password');
  	}

	ionViewWillEnter()
	{
		this.loadXML(this.login,this.password);
	}

	loadXML(login,password) 
	{

		this.http.get('/assets/data/users.xml',
		{
			headers: new HttpHeaders()
			.set('Content-Type', 'text/xml') 
			.append('Access-Control-Allow-Methods', 'GET')
			.append('Access-Control-Allow-Origin', '*')
			.append('Access-Control-Allow-Headers', "Access-Control"),
			 responseType:'text' 
		 })
	    .subscribe((data)=>
	    {
	      	this.parseXML(data,login,password)
	      	.then((data)=>
	      	{
	      	   this.xmlItems = data;
	      	});
		}); 
	}

	parseXML(data,login,password)
	{
	   return new Promise(resolve =>
	   {
	    	var k,
	          arr    = [],
	          parser = new xml2js.Parser(
	          {
	          	trim: true,
	            explicitArray: true
	          });

			parser.parseString(data, function (err, result)
	    	{
	        	var obj = result.USERS;
	        	arr = [];
	         	for(k in obj.USER)
	         	{
	            	var item = obj.USER[k];

	            	if(item.LOGIN == login && item.PASSWORD == password){

	            		arr.push({
		               		ine           : item.INE[0],
		               		nom      	 : item.NOM[0],
		               		prenom    	 : item.PRENOM[0],
		               		date 	 	 : item.DATE_NAISS[0],
		               		login    	 : item.LOGIN[0],
		               		password 	 : item.PASSWORD[0],
		               		tel 	 	 : item.TEL[0]
	            		});
	            	}
				}
				resolve(arr);

				


			});
			
	   });
	}

}




