import {Player} from '@react-native-community/audio-toolkit';
import {Platform} from 'react-native';

export const playSound = (filename: string) => {
  const player = new Player(filename, {
    autoDestroy: false,
    continuesToPlayInBackground: true,
  });
  player.looping = false;
  let isAndroid = Platform.OS === 'android';
  if (isAndroid) {
    player.speed = 0.0;
  }

  player.prepare((err) => {
    if (err) {
      console.log('Error Prepare', err);
    } else {
      player.play((err) => {
        if (err) {
          console.log('ERROR PLay', err);
        } else {
          player.speed = 1.0;
        }
      });

      player.on('ended', () => player.destroy());
    }
  });
};
