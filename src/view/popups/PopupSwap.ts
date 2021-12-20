import { ExtendedText, I18nPlugin } from '@rollinsafary/phaser3-i18n-plugin';
import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import { MultiAtlases } from '../../assets';
import { Translation } from '../../translations';
import BasePopup from './BasePopup';

export class PopupSwap extends BasePopup {
  public static NAME: string = 'PopupSwap';
  protected background: NinePatch;
  public icon: Phaser.GameObjects.Image;
  protected subTitle: ExtendedText;
  protected subTitle1: ExtendedText;
  protected swapButton: Phaser.GameObjects.Image;
  protected cancelButton: Phaser.GameObjects.Image;
  protected cancelButtonText: ExtendedText;
  protected swapButtonText: ExtendedText;

  protected createComponents(): void {
    this.setScale(2);
    this.createBackground();
    this.createIcon();
    this.createSubTitle();
    this.createSubTitle1();
    this.createCancelButton();
    this.createSwapButton();
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
      frame: MultiAtlases.Popup.Atlas.Frames.PopupIcon1,
    });
    this.add(this.icon);
  }
  protected createSubTitle(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = { fontSize: '20px' };
    this.subTitle = this.scene.make.extText({
      x: 0,
      y: 0,
      text: Translation.POPUP_SWAP_SUBTITLE,
      style,
    });
    this.subTitle.setOrigin(0.5, 0);
    this.add(this.subTitle);
    this.subTitle.setWordWrapWidth(this.width * 0.9);
    this.subTitle.setAlign('center');
  }
  protected createSubTitle1(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = { fontSize: '15px' };
    this.subTitle1 = this.scene.make.extText({
      x: 0,
      y: 0,
      text: Translation.POPUP_SWAP_SUBTITLE1,
      style,
    });
    this.subTitle1.setOrigin(0.5, 0);
    this.add(this.subTitle1);
    this.subTitle1.setWordWrapWidth(this.width * 0.9);
    this.subTitle1.setAlign('center');
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
      text: Translation.POPUP_SWAP_BUTTON_CANCEL,
      style,
    });
    this.cancelButtonText.setOrigin(0.5);
    this.add(this.cancelButtonText);
  }
  protected createSwapButton() {
    this.createSwapButtonBackground();
    this.createSwapButtonText();
  }
  protected createSwapButtonBackground(): void {
    this.swapButton = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Popup.Atlas.Name,
      frame: MultiAtlases.Popup.Atlas.Frames.PopupChallenge,
    });
    this.add(this.swapButton);
  }

  protected createSwapButtonText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '20px',
    };
    this.swapButtonText = this.scene.make.extText({
      x: 0,
      y: 0,
      text: Translation.POPUP_SWAP_BUTTON_SWAP,
      style,
    });
    this.swapButtonText.setOrigin(0.5);
    this.add(this.swapButtonText);
  }

  protected recalculateSizes(): void {
    const height: number =
      30 +
      this.icon.height +
      20 +
      this.subTitle.height +
      20 +
      this.subTitle1.height +
      20 +
      this.swapButton.height +
      20 +
      this.cancelButton.height +
      30;
    this.background.resize(this.background.width, height);
    this.setSize(this.background.width, this.background.height);
    this.setPositions();
  }
  protected setPositions(): void {
    this.icon.y = -this.height * 0.5 + this.icon.height * 0.5 + 30;
    this.subTitle.y = this.icon.y + this.icon.height * 0.5 + 20;
    this.subTitle1.y = this.subTitle.y + this.subTitle.height * 0.5 + 20;
    this.subTitle1.x = this.cancelButtonText.x;
    this.cancelButton.y =
      this.height * 0.5 - this.cancelButton.height * 0.5 - 20;
    this.cancelButtonText.x = this.cancelButton.x;
    this.swapButtonText.y = this.cancelButton.y;
    this.swapButton.y =
      this.cancelButton.y -
      this.cancelButton.height * 0.5 -
      this.swapButton.height * 0.5 -
      20;
    this.swapButtonText.x = this.swapButton.x;
    this.swapButtonText.y = this.swapButton.y;
    this.cancelButtonText.y = this.height * 0.5 + this.icon.height * 0.5 - 30;
    this.cancelButtonText.x = this.cancelButton.x;
    this.cancelButtonText.y = this.cancelButton.y;
  }

  protected setListeners(): void {
    this.scene.i18n.on(
      I18nPlugin.LANGUAGE_CHANGED_EVENT,
      this.recalculateSizes,
      this,
    );
  }
}
