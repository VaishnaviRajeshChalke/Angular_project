import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // 
    AuthModule, 
    SharedModule,
   
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : RequestInterceptor , multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ResponseInterceptor, multi : true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
