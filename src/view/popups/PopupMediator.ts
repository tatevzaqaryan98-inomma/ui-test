import GameScene from '../scenes/GameScene';
import BasePopupMediator from './BasePopupMediator';
import { Popup } from './Popup';

export class PopupMediator extends BasePopupMediator<Popup> {
  public static NAME: string = 'PopupMediator';

  constructor() {
    super(PopupMediator.NAME);
  }

  public registerNotificationInterests(): void {
    this.subscribeToNotifications(GameScene.READY_NOTIFICATION);
  }

  public handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case GameScene.READY_NOTIFICATION:
        try {
          this.showView();
        } catch (error) {
          console.error(error);
        }
        break;
      default:
        break;
    }
  }

  protected createView(): void {
    super.createView(new Popup());
  }
}
