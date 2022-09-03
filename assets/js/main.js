// import MidiPlayer from '/assets/js/web-midi-player.js';
const { 'web-midi-player': { default: MidiPlayer } } = window;

up.history.config.restoreTargets=[':main'];

document.addEventListener('DOMContentLoaded', function () {
  console.log('Loaded');

  let state = null;
  let tagline = document.getElementById('tagline');
  let tagline0 = tagline.innerHTML;
  let tagline1 = "Take me to the Pizza Hut";
  let tagline2 = "learn to swim";

  function stateMachine (event) {
    state = event.event;
    console.log(state);
  }

  const midiPlayer = new MidiPlayer({
    patchUrl: 'https://static.billhunt.dev/assets/audio/patches/',
    eventLogger: stateMachine
  });

  let path = 'https://static.billhunt.dev/assets/audio/';

  let selectlist = document.getElementById('audiofile');

  selectlist.addEventListener('change', function(e) {
    // console.log('change');
    midiPlayer.stop();
    document.getElementById('playbutton').classList.remove('hide');
    document.getElementById('pausebutton').classList.add('hide');
  });


  document.getElementById('playpause').addEventListener('click', e => {
    e.preventDefault();
    if(state === 'MIDI_PLAY') {
      midiPlayer.pause();

      document.getElementById('playbutton').classList.remove('hide');
      document.getElementById('pausebutton').classList.add('hide');
    }
    else if(state === 'MIDI_PAUSE') {
      midiPlayer.resume();

      document.getElementById('playbutton').classList.add('hide');
      document.getElementById('pausebutton').classList.remove('hide');
    }
    else {
      let file = selectlist.options[selectlist.selectedIndex].value;
      midiPlayer.play({ url: path + file });

      document.getElementById('playbutton').classList.add('hide');
      document.getElementById('pausebutton').classList.remove('hide');

      if(file === 'Offspring-All_I_Want.mid') {
        document.body.classList.add('taxi');
        tagline.innerHTML = tagline1;
      }
      else if(file === 'Tool-Aenima.mid') {
        document.body.classList.remove('taxi');
        tagline.innerHTML = tagline2;
      }
      else {
        document.body.classList.remove('taxi');
        tagline.innerHTML = tagline0;
      }
    }
  });

}, false);

export default {};