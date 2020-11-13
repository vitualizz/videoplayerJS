import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './AutoPlay.js'

const video = document.querySelector('video')
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()]
})

const playBtn = document.getElementById('play')
const muteBtn = document.getElementById('mute')
playBtn.onclick = () => player.togglePlay()
muteBtn.onclick = () => player.toggleMute()
