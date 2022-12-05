import { Component } from "@angular/core"
import { translate } from '@rxweb/translate'
@Component({
    selector: "app-footer",
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    @translate({ translationName: "footer" }) multiLingualContent: { [key: string]: any };
}
