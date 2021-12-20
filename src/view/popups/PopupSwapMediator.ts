import GameScene from '../scenes/GameScene';
import BasePopupMediator from './BasePopupMediator';
import { PopupSwap } from './PopupSwap';

export class PopupSwapMediator extends BasePopupMediator<PopupSwap> {
  public static NAME: string = 'PopupSwapMediator';

  constructor() {
    super(PopupSwapMediator.NAME);
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
    super.createView(new PopupSwap());
  }
}
