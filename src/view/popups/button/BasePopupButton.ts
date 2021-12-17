import { ExtendedText } from '@rollinsafary/phaser3-i18n-plugin';
import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import BaseScene from '../../scenes/BaseScene';

export abstract class BasePopupButton<
  T extends Phaser.GameObjects.Sprite | NinePatch,
> extends Phaser.GameObjects.Container {
  protected background?: T;
  protected text?: ExtendedText;

  constructor(public scene: BaseScene, protected config: IMenuButtonConfig) {
    super(scene);
    this.createComponents();
    this.setListeners();
  }

  protected createComponents(): void {
    this.createBackground();
    this.setSize(this.background.width, this.background.height);
    !!this.config.text && this.createText();
    // this.setPositions();
  }

  protected abstract createBackground(): void;

  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      color: this.config.textColor,
      fontSize: '40px',
    };
    this.text = this.scene.make.extText({
      x: 0,
      y: 0,
      text: this.config.text,
      style,
    });
    this.text.setOrigin(0, 0.5);
    this.add(this.text);
  }
  //   protected setPositions(): void {
  //     console.warn(this.background.width, this.background.displayWidth);
  //     this.icon.x = !!this.config.text
  //       ? -this.width * 0.5 + this.icon.width * 0.5
  //       : 0;
  //     !!this.text && (this.text.x = this.icon.x + this.icon.width * 0.7);
  //   }
  protected setListeners(): void {}
}

export interface IMenuButtonConfig {
  iconFrame: string;
  backgroundFrame: string;
  text?: string;
  textColor?: string;
}
