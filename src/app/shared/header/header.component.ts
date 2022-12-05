import { Component } from "@angular/core"
import { RxTranslateModule, translate } from '@rxweb/translate'
@Component({
    selector: "app-header",
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @translate({ translationName: "header" }) multilingualContent: { [key: string]: any };


    get activeLanguage() {
        return this.multilingualContent.languageCode == "en" ? "English" : "Français";
    }

    changeLanguage(languageCode: string) {
        RxTranslateModule.changeLanguage(languageCode);
    }
}
