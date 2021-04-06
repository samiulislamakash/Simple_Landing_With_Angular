import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { NewsComponent } from './components/news/news.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, SubscriptionComponent, NewsComponent, FeedbackComponent, HistoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
