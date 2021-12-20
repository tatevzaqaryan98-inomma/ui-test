import { PopupSwapMediator } from '../../view/popups/PopupSwapMediator';
import BaseSimpleCommand from '../base/BaseSimpleCommand';

export class RegisterPopupsCommand extends BaseSimpleCommand {
  public execute(): void {
    // this.facade.registerMediator(new PopupMediator());
    this.facade.registerMediator(new PopupSwapMediator());
  }
}
