import PopupManager from '../utils/PopupManager';
import BaseSceneMediator from './BaseSceneMediator';
import PopupScene from './PopupScene';

export default class PopupSceneMediator extends BaseSceneMediator<PopupScene> {
  public static NAME: string = 'PopupSceneMediator';
  protected popupManager: PopupManager;
  constructor() {
    super(PopupSceneMediator.NAME, null);
    this.popupManager = PopupManager.getInstance();
  }

  public onRegister(): void {
    super.onRegister();
    this.setView();
    this.unsubscribeToNotification(
      PopupScene.WAKE_NOTIFICATION,
      PopupScene.SLEEP_NOTIFICATION,
    );
    this.sendNotification(PopupScene.REGISTERED_NOTIFICATION);
  }

  public registerNotificationInterests(): void {
    this.subscribeToNotifications();
  }

  public handleNotification(notificationName: string, ...args: any[]): void {
    super.handleNotification(notificationName);
    switch (notificationName) {
      default:
        console.warn(`${notificationName} is unhandled!`);
        break;
    }
  }

  public onSceneWake(): void {
    this.sceneManager.bringToTop(PopupScene.NAME);
    this.sendNotification(PopupScene.WAKE_NOTIFICATION);
  }

  public onSceneSleep(): void {
    this.sceneManager.sendToBack(PopupScene.NAME);
    this.sendNotification(PopupScene.SLEEP_NOTIFICATION);
  }

  protected async setView(): Promise<void> {
    const scene: PopupScene = new PopupScene();
    this.sceneManager.add(PopupScene.NAME, scene);
    this.setViewComponent(scene);
    PopupManager.scene = this.viewComponent;
    await this.startScene();
    this.sceneManager.sleep(PopupScene.NAME);
    super.setView();
  }

  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();
    this.viewComponent.events.on(
      Phaser.Scenes.Events.SLEEP,
      this.onSceneSleep,
      this,
    );
    this.viewComponent.events.on(
      Phaser.Scenes.Events.WAKE,
      this.onSceneWake,
      this,
    );
  }
}
