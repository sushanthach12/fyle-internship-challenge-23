import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { RepoCardsComponent } from './components/repo-cards/repo-cards.component';
import { UserComponent } from './components/user/user.component';
import { RespositoryComponent } from './components/respository/respository.component';
import { CacheService } from './services/cache/cache.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RepoCardsComponent,
    UserComponent,
    RespositoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CacheService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
