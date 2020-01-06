import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//import { InAppBrowser } from '@ionic-enterprise/inappbrowser/ngx';


//constructor(private iab: InAppBrowser) { }

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [BatteryStatus]
})
export class Tab1Page {
  btlvl: any;
  btsat: any;
  subscription: any;
  constructor(private vibration: Vibration, private batteryStatus: BatteryStatus, private iab: InAppBrowser) { }

  CheckBatStatus(){
    this.subscription = this.batteryStatus.onChange().subscribe(
      (status) => {
        console.log(status.level, status.isPlugged);
        this.btlvl = status.level;
        if (status.isPlugged == true){
          this.btsat= "... Charging :)";
        } else {
          this.btsat= "... Pas Brancher :(";
        }
      }
    );
  }

  stpBatCheck(){
    this.subscription.unsubscribe();
  }

  OpenUrl()
  {
    const browser = this.iab.create('https://tiebari.com/');
    browser.show();
  }




  vibrate1(){
    this.vibration.vibrate(1000);

  }vibrate2(){
    this.vibration.vibrate(3000);

  }vibrate3(){
    this.vibration.vibrate(5000);

  }
}
