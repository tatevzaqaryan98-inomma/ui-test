import { MultiAtlases } from '../../assets';
import BasePopup from './BasePopup';

export class Popup extends BasePopup {
  public static NAME: string = 'Popup';

  protected background: Phaser.GameObjects.Image;
  protected closeButton: Phaser.GameObjects.Image;
  protected challengeButton: Phaser.GameObjects.Image;
  protected exitButton: Phaser.GameObjects.Image;
  protected text: Phaser.GameObjects.Text;

  protected createComponents(): void {}

  protected createBackground(): void {
    this.background = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupBackground,
    });
    this.add(this.background);
  }
  protected createExitButton(): void {
    this.exitButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupIcon,
    });
    this.add(this.exitButton);
  }
  protected createChallengeButton(): void {
    this.challengeButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupRectangle88,
    });
    this.add(this.challengeButton);
  }
  protected createCloseButton(): void {
    this.closeButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupRectangle89,
    });
    this.add(this.closeButton);
  }
}
