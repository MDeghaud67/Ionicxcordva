import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConnexionPage } from '../pages/connexion/connexion';
// import { InscriptionPage } from '../pages/inscription/inscription';

@NgModule({
 
	declarations: [
		MyApp,
		HomePage,
		ConnexionPage
		//InscriptionPage
	],

	imports: [
   	 	BrowserModule,
    	HttpClientModule,
    	IonicModule.forRoot(MyApp, { backButtonText: 'Retour'})
 	 ],
  	bootstrap: [IonicApp],
  	entryComponents: [
  		MyApp,
		HomePage,
		ConnexionPage
		//InscriptionPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	] 
})
export class AppModule {}