import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReposComponent } from './repos/repos.component';
import { HttpHeadersInterceptors } from './interceptor/httpinterceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponentComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
