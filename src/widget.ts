import { any } from 'async';

export class Widget {
  constructor(private amoWidget: any) {}

  public onRender() {
    console.log('Render From Widget :)');
  }
}
