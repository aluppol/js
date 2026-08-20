import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFilesComponentComponent } from './upload-files-component/upload-files-component.component';
import { TestAutostringifyComponent } from './test-autostringify/test-autostringify.component';

@NgModule({ declarations: [AppComponent, UploadFilesComponentComponent, TestAutostringifyComponent],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule], providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())] })
export class AppModule {}
