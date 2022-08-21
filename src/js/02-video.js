import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframeRef = document.querySelector("iframe")
const player = new Player(iframeRef);
const KEY_LOCALSTORAGE = "videoplayer-current-time";


player.setCurrentTime(localStorage.getItem(KEY_LOCALSTORAGE) || 0)
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(params){
  localStorage.setItem(KEY_LOCALSTORAGE, params.seconds);
  // console.log(params)
}