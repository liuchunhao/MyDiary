import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { EntryPage } from '../pages/entry/entry';
import { CalendarPage } from '../pages/calendar/calendar';
import { DiaryPage } from '../pages/diary/diary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntryPage,
    CalendarPage,
    DiaryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntryPage,
    CalendarPage,
    DiaryPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
