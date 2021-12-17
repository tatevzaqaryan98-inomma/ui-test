import { MultiAtlases } from '../../assets';
import BasePopup from './BasePopup';

export class Popup extends BasePopup {
  public static NAME: string = 'Popup';

  protected background: Phaser.GameObjects.Image;
  protected closeButton: Phaser.GameObjects.Image;
  protected challengeButton: Phaser.GameObjects.Image;
  protected exitButton: Phaser.GameObjects.Image;
  protected cancelText: Phaser.GameObjects.Text;
  protected challengeText: Phaser.GameObjects.Text;
  protected popupText: Phaser.GameObjects.Text;

  protected createComponents(): void {
    this.createBackground();
    this.createExitButton();
    this.createChallengeButton();
    this.createCloseButton();
    this.crateCancelButtonText();
    this.createChallengeButtonText();
    this.createPopupText();
  }

  protected createBackground(): void {
    this.background = this.createBackgroundImage(
      MultiAtlases.Popup.Atlas.Name,
      MultiAtlases.Popup.Atlas.Frames.PopupBackground,
    );
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
    this.exitButton.y =
      (1 - this.exitButton.originY) * this.exitButton.height - 120;
  }
  protected createChallengeButton(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '20px',
    };
    this.challengeButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupRectangle89,
    });
    this.add(this.challengeButton);
    this.challengeButton.y =
      (1 - this.challengeButton.originY) * this.challengeButton.height;
  }
  protected createCloseButton(): void {
    this.closeButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupRectangle88,
    });
    this.add(this.closeButton);
    this.closeButton.setDepth(1.1);
    this.closeButton.y =
      (1 - this.closeButton.originY) * this.closeButton.height + 80;
  }
  protected createChallengeButtonText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '30px',
    };
    this.challengeText = this.scene.make.text({
      x: this.challengeButton.x,
      y: this.challengeButton.y,
      text: 'CHALLENGE',
      style,
    });
    this.challengeText.setOrigin(0.5);
    this.add(this.challengeText);
  }

  protected crateCancelButtonText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '20px',
    };
    this.cancelText = this.scene.make.text({
      x: this.closeButton.x,
      y: this.closeButton.y,
      text: 'Cancel',
      style,
    });
    this.cancelText.setOrigin(0.5);
    this.add(this.cancelText);
  }

  protected createPopupText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '20px',
    };
    this.popupText = this.scene.make.text({
      x: this.challengeButton.x - 50,
      y: this.challengeButton.y - 50,
      text: 'Are You Sure You Want to Challenge the Opponent',
    });
    this.popupText.setOrigin(0.5);
    this.add(this.popupText);
  }
}
