up.history.config.restoreTargets=[':main'];

document.addEventListener('DOMContentLoaded', function () {
  console.log('Loaded');

  if(document.getElementsByClassName('tabgroup').length) {
    init_tabs(document.getElementsByClassName('tabgroup')[0]);
  }
  up.compiler('.tabgroup', init_tabs);

  init_web_music_player();

}, false);

function init_tabs(tabgroup) {
  console.log('init tabs');
    const tabs = tabgroup.getElementsByClassName('tab');
    const target = document.getElementById(tabgroup.dataset.target);

    for(const tab of tabs) {
      const link = tab.getElementsByTagName('a')[0];
      link.addEventListener('click', function(e) {
        e.preventDefault();
        for(const elm of tabs) {
          elm.classList.remove('active');
        }
        this.parentElement.classList.add('active');

        const targets = target.getElementsByClassName('tab-target');
        for(const inactive of targets) {
          inactive.classList.remove('active');
        }
        target.querySelector(this.getAttribute('href')).classList.add('active');
      });
    }
}

function init_web_music_player() {
  let tagline = document.getElementById('tagline');
  const tagline0 = tagline.innerHTML;
  const tagline1 = 'Take me to the Pizza Hut';
  const tagline2 = 'learn to swim';

  const player = document.createElement('audio');

  const path = 'https://static.billhunt.dev/assets/audio/mp3/';

  const selectlist = document.getElementById('audiofile');

  selectlist.addEventListener('change', function(e) {
    // console.log('change');
    document.getElementById('playbutton').classList.remove('hide');
    document.getElementById('pausebutton').classList.add('hide');
  });


  function isPlaying() {
    return !player.paused;
  }

  function nextTrack() {
    let next = selectlist.selectedIndex + 1
    if(next > selectlist.options.length) {
      next = 0;
    }

    selectlist.options[next].selected = true;
    playPause();
  }

  function playPause() {
    // Start a new track
    let value = selectlist.options[selectlist.selectedIndex].value;
    let file = path + value;
    if(player.src != file) {
      player.pause();
      player.src = file;
      player.load();
    }

    if(value === 'Offspring-All_I_Want.midi.mp3') {
      document.body.classList.add('taxi');
      tagline.innerHTML = tagline1;
    }
    else if(value === 'Tool-Aenima.midi.mp3') {
      document.body.classList.remove('taxi');
      tagline.innerHTML = tagline2;
    }
    else {
      document.body.classList.remove('taxi');
      tagline.innerHTML = tagline0;
    }

    if(isPlaying()) {
      console.log('playing');
      player.pause();

      document.getElementById('playbutton').classList.remove('hide');
      document.getElementById('pausebutton').classList.add('hide');
    }
    else {
      console.log('stopped');
      player.play();

      document.getElementById('playbutton').classList.add('hide');
      document.getElementById('pausebutton').classList.remove('hide');
    }
  }

  document.getElementById('playpause').addEventListener('click', e => {
    e.preventDefault();
    playPause();
  });

  // player.addEventListener("ended", nextTrack);
}


export default {};