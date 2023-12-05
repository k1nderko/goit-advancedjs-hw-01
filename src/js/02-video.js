
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerIframe = document.getElementById('vimeo-player');

const player = new Vimeo(playerIframe);

const storageKey = "videoplayer-current-time";

const saveTimeToStorage = throttle(async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem(storageKey, currentTime.toString());
}, 1000); 

player.on('timeupdate', saveTimeToStorage);

const storedTime = localStorage.getItem(storageKey);

if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

