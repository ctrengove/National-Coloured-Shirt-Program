import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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
import { ImagePageModule } from '../pages/image/image.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EquipmentAndRolePage,
    BallOrStrikePage,
    SafeOrOutPage,
    TheSafeSignalPage,
    TheOutSignalPage,
    FairOrFoulPage,
    OtherSignalsPage,
    TheInfieldFlyPage,
    MakingADecisionPage,
    TheTwoUmpireSystemPage,
    ThreeBasicPrinciplesPage,
    CommunicationPage,
    CrewSignalsPage,
    // ImagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ImagePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EquipmentAndRolePage,
    BallOrStrikePage,
    SafeOrOutPage,
    TheSafeSignalPage,
    TheOutSignalPage,
    FairOrFoulPage,
    OtherSignalsPage,
    TheInfieldFlyPage,
    MakingADecisionPage,
    TheTwoUmpireSystemPage,
    ThreeBasicPrinciplesPage,
    CommunicationPage,
    CrewSignalsPage,
    ImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
