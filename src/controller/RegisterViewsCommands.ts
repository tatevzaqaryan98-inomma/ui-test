import { SyncMacroCommand } from '@rollinsafary/mvc';
import PopupScene from '../view/scenes/PopupScene';
import BaseSimpleCommand from './base/BaseSimpleCommand';
import { RegisterPopupsCommand } from './ui/RegisterPopupsCommand';
import RegisterScenesCommand from './ui/RegisterScenesCommand';

export class RegisterViewsCommands extends SyncMacroCommand<BaseSimpleCommand> {
  public execute(): void {
    super.execute();
    this.facade.registerCommand(
      PopupScene.REGISTERED_NOTIFICATION,
      RegisterPopupsCommand,
    );
  }
  public initializeMacroCommand(): void {
    this.addSubCommand(RegisterScenesCommand);
  }
}
