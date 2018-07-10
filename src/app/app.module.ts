import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as TvShowReducer from './store/tv-show/tv-show.reducer';
import { TvShowEffects } from './store/tv-show/tv-show.effect';
import { AppComponent } from './app.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';
import { TitleComponent } from './components/tvshow/title/title.component';
import { MenuComponent } from './components/tvshow/menu/menu.component';
import { ButtonComponent } from './components/tvshow/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TvshowComponent,
    TitleComponent,
    MenuComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot({state: TvShowReducer.TvShowReducer}),
    EffectsModule.forRoot([TvShowEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
