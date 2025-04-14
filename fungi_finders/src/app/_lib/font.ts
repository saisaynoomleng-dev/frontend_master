import localFont from 'next/font/local';

export const fira = localFont({
  src: [
    {
      path: '../fonts/Fira_Sans/FiraSans-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../fonts/Fira_Sans/FiraSans-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../fonts/Fira_Sans/FiraSans-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../fonts/Fira_Sans/FiraSans-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../fonts/Fira_Sans/FiraSans-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../fonts/Fira_Sans/FiraSans-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-fira',
});

export const outfit = localFont({
  src: [
    {
      path: '../fonts/Outfit/static/Outfit-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../fonts/Outfit/static/Outfit-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../fonts/Outfit/static/Outfit-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../fonts/Outfit/static/Outfit-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../fonts/Outfit/static/Outfit-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../fonts/Outfit/static/Outfit-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-outfit',
});
