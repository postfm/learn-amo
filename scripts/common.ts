import { Config } from 'amo-widget-builder';
import path from 'path';

export const config: Config = {
  name: {
    ru: 'Мой первый виджет',
  },
  description: {
    ru: 'Это виджет созданный во время обучения',
  },
  shortDescription: {
    ru: 'Краткое описание виджета',
  },
  tourDescription: {
    ru: 'Установи меня',
  },
  advancedSettingsTitle: {
    ru: 'Настройки тут',
  },
  version: '1.0.0',
  fakeConfig: {
    required: false,
  },
  locales: ['ru'],
  outDir: path.resolve(__dirname, '..'),
  bundleDir: path.resolve(__dirname, '../dist'),
};
