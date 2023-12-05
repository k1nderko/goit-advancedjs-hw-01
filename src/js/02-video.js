import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKey = "videoplayer-current-time";

const storedTime = localStorage.getItem(storageKey);
if (storedTime) {
  player.setCurrentTime(storedTime);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(storageKey, seconds);
}
