import { SimpleCommand, SyncMacroCommand } from '@rollinsafary/mvc';
import { RegisterViewsCommands } from './RegisterViewsCommands';

export default class StartupCommand extends SyncMacroCommand<SimpleCommand> {
  public initializeMacroCommand(): void {
    this.addSubCommand(RegisterViewsCommands);
  }
}
