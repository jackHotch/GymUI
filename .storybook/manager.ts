import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
 
const theme = create({
  base: 'light',
  brandTitle: 'GymUI',
  brandImage: '../public/pink-dumbbell.png',
})

addons.setConfig({
  theme
})