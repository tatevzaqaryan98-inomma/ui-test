import { PopupMediator } from '../../view/popups/PopupMediator';
import BaseSimpleCommand from '../base/BaseSimpleCommand';

export class RegisterPopupsCommand extends BaseSimpleCommand {
  public execute(): void {
    this.facade.registerMediator(new PopupMediator());
  }
}
