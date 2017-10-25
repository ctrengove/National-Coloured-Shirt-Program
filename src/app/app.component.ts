import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EquipmentAndRolePage } from '../pages/equipment-and-role/equipment-and-role';
import { BallOrStrikePage } from '../pages/ball-or-strike/ball-or-strike';
import { SafeOrOutPage } from '../pages/safe-or-out/safe-or-out';
import { TheSafeSignalPage } from '../pages/the-safe-signal/the-safe-signal';
import { TheOutSignalPage } from '../pages/the-out-signal/the-out-signal';
import { FairOrFoulPage } from '../pages/fair-or-foul/fair-or-foul';
import { OtherSignalsPage } from '../pages/other-signals/other-signals';
import { TheInfieldFlyPage } from '../pages/the-infield-fly/the-infield-fly';
import { MakingADecisionPage } from '../pages/making-a-decision/making-a-decision';
import { TheTwoUmpireSystemPage } from '../pages/the-two-umpire-system/the-two-umpire-system';
import { ThreeBasicPrinciplesPage } from '../pages/three-basic-principles/three-basic-principles';
import { CommunicationPage } from '../pages/communication/communication';
import { CrewSignalsPage } from '../pages/crew-signals/crew-signals';
import { ImagePage } from '../pages/image/image';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Equipment And Role', component: EquipmentAndRolePage },
      { title: 'Ball or Strike', component: BallOrStrikePage },
      { title: 'Safe or Out', component: SafeOrOutPage },
      { title: 'The Safe Signal', component: TheSafeSignalPage },
      { title: 'The Out Signal', component: TheOutSignalPage },
      { title: 'Fair or Foul', component: FairOrFoulPage },
      { title: 'Other Signals', component: OtherSignalsPage },
      { title: 'The Infield Fly', component: TheInfieldFlyPage },
      { title: 'Making A Decision', component: MakingADecisionPage },
      { title: 'The Two Umpire System', component: TheTwoUmpireSystemPage },
      { title: 'Three Basic Principles', component: ThreeBasicPrinciplesPage },
      { title: 'Communication', component: CommunicationPage },
      { title: 'Crew Signals', component: CrewSignalsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
