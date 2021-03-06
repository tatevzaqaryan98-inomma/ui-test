import { ExtendedText, I18nPlugin } from '@rollinsafary/phaser3-i18n-plugin';
import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import { MultiAtlases } from '../../assets';
import { Translation } from '../../translations';
import BasePopup from './BasePopup';

export class Popup extends BasePopup {
  public static NAME: string = 'Popup';

  protected background: NinePatch;
  protected cancelButton: Phaser.GameObjects.Image;
  protected challengeButton: Phaser.GameObjects.Image;
  protected icon: Phaser.GameObjects.Image;
  protected cancelButtonText: ExtendedText;
  protected challengeButtonText: ExtendedText;
  protected subtitle: ExtendedText;

  protected createComponents(): void {
    this.setScale(2);
    this.createBackground();
    this.createIcon();
    this.createSubtitle();
    this.createCancelButton();
    this.createChallengeButton();
    this.recalculateSizes();
    this.setListeners();
  }

  protected createBackground(): void {
    this.background = this.createBackgroundNinePatch(
      MultiAtlases.Popup.Atlas.Name,
      MultiAtlases.Popup.Atlas.Frames.PopupBackground,
      300,
      300,
    );
    this.add(this.background);
  }
  protected createIcon(): void {
    this.icon = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupIcon,
    });
    this.add(this.icon);
  }
  protected createSubtitle(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '20px',
    };
    this.subtitle = this.scene.make.extText({
      x: 0,
      y: 0,
      text: Translation.POPUP_CHALLENGE_SUBTITLE,
      style,
    });
    this.subtitle.setOrigin(0.5, 0);
    this.add(this.subtitle);
    this.subtitle.setWordWrapWidth(this.width * 0.9);
    this.subtitle.setAlign('center');
  }

  protected createCancelButton(): void {
    this.createCancelButtonBackground();
    this.crateCancelButtonText();
  }
  protected createCancelButtonBackground(): void {
    this.cancelButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupCancel,
    });
    this.add(this.cancelButton);
    this.cancelButton.setDepth(1.1);
  }

  protected crateCancelButtonText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '20px',
    };
    this.cancelButtonText = this.scene.make.extText({
      x: 0,
      y: 0,
      text: Translation.POPUP_CHALLENGE_BUTTON_CANCEL,
      style,
    });
    this.cancelButtonText.setOrigin(0.5);
    this.add(this.cancelButtonText);
  }

  protected createChallengeButton(): void {
    this.createChallengeButtonBackground();
    this.createChallengeButtonText();
  }
  protected createChallengeButtonBackground(): void {
    this.challengeButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupChallenge,
    });
    this.add(this.challengeButton);
  }

  protected createChallengeButtonText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '20px',
    };
    this.challengeButtonText = this.scene.make.extText({
      x: this.challengeButton.x,
      y: this.challengeButton.y,
      text: Translation.POPUP_CHALLENGE_BUTTON_CHALLENGE,
      style,
    });
    this.challengeButtonText.setOrigin(0.5);
    this.add(this.challengeButtonText);
  }

  protected recalculateSizes(): void {
    const height: number =
      30 +
      this.icon.height +
      20 +
      this.subtitle.height +
      20 +
      this.challengeButton.height +
      20 +
      this.cancelButton.height +
      30;
    this.background.resize(this.background.width, height);
    this.setSize(this.background.width, this.background.height);
    this.setPositions();
  }

  protected setPositions(): void {
    this.icon.y = -this.height * 0.5 + this.icon.height * 0.5 + 30;
    this.subtitle.y = this.icon.y + this.icon.height * 0.5 + 20;
    this.cancelButton.y =
      this.height * 0.5 - this.cancelButton.height * 0.5 - 20;
    this.cancelButtonText.x = this.cancelButton.x;
    this.cancelButtonText.y = this.cancelButton.y;
    this.challengeButton.y =
      this.cancelButton.y -
      this.cancelButton.height * 0.5 -
      this.challengeButton.height * 0.5 -
      20;
    this.challengeButtonText.x = this.challengeButton.x;
    this.challengeButtonText.y = this.challengeButton.y;
  }

  protected setListeners(): void {
    this.scene.i18n.on(
      I18nPlugin.LANGUAGE_CHANGED_EVENT,
      this.recalculateSizes,
      this,
    );
  }

  protected removeListeners(): void {
    this.scene.i18n.off(
      I18nPlugin.LANGUAGE_CHANGED_EVENT,
      this.recalculateSizes,
      this,
    );
  }

  public destroy(fromScene?: boolean): void {
    this.removeListeners();
    super.destroy(fromScene);
  }
}
