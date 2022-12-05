import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RxTranslateModule } from "@rxweb/translate"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        AppComponent, UserComponent, HeaderComponent, FooterComponent
  ],
    imports: [FormsModule,
    BrowserModule,
      AppRoutingModule,
      RxTranslateModule.forRoot({
        cacheLanguageWiseObject:true,
          filePath:"assets/i18n/{{language-code}}/{{translation-name}}.json"
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
