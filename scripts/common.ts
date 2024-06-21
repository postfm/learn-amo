import { Config } from 'amo-widget-builder';
import * as path from 'path';

export const config: Config = {
  name: {
    ru: 'Мой Первый Виджет',
  },
  description: {
    ru: 'Этот виджет невероятен',
  },
  shortDescription: {
    ru: 'Тут кратенько',
  },
  tourDescription: {
    ru: 'Установи меня!',
  },
  advancedSettingsTitle: {
    ru: 'Настройки тут',
  },
  version: '1.0.0',
  fakeConfig: {
    required: false,
  },
  locales: ['ru'],
  bundleDir: path.resolve(__dirname, '../dist'),
  outDir: path.resolve(__dirname, '..'),
};
