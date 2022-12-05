import { Component } from '@angular/core';
import { translate, RxTranslateModule } from '@rxweb/translate';

@Component({
  templateUrl: './user.component.html',
})
export class UserComponent {
  @translate({ translationName: 'user' })
  multilingualContent: { [key: string]: any };

  freeText: string;

  message: string;

  users: any[] = [
    {
      id: '1',
      name: 'Mae Solomon',
      gender: 'female',
      email: 'maesolomon@unisure.com',
      phone: '+1 (978) 434-2855',
    },
    {
      id: '2',
      name: 'Bell Mason',
      gender: 'male',
      email: 'bellmason@unisure.com',
      phone: '+1 (884) 459-2081',
    },
  ];

  selectUser(user) {
    this.message = RxTranslateModule.tranlate(
      this.multilingualContent.text.selectedRecord,
      user
    );
  }
}
