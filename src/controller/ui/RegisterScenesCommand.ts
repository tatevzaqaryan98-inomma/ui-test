import { READY_TO_START_NOTIFICATION } from '../../constants/GlobalNotifications';
import BootSceneMediator from '../../view/scenes/BootSceneMediator';
import GameSceneMediator from '../../view/scenes/GameSceneMediator';
import PopupSceneMediator from '../../view/scenes/PopupSceneMediator';
import ServiceSceneMediator from '../../view/scenes/ServiceSceneMediator';
import BaseSimpleCommand from '../base/BaseSimpleCommand';

export default class RegisterScenesCommand extends BaseSimpleCommand {
  public execute(): void {
    this.facade.registerMediator(new ServiceSceneMediator());
    this.facade.registerMediator(new PopupSceneMediator());
    this.facade.registerMediator(new BootSceneMediator());
    this.facade.registerMediator(new GameSceneMediator());
    this.sendNotification(READY_TO_START_NOTIFICATION);
  }
}
