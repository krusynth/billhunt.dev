// Initial filtering on load.
up.compiler('#jobs-form', elm => {
  doLoad();
  doFilter();
});

up.compiler('.checkbox-btn', elm => {
  elm.addEventListener('click', (e) => {
    doFilter();
  });
});

// use the query string to set filters.
function doLoad() {
  const filters = document.getElementsByClassName('filter');
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.size > 0) {
    [...filters].forEach(elm => {
      if(urlParams.get(elm.name) == elm.value) {
        elm.checked = 'checked';
      } else {
        elm.checked = false;
      }
    });

    let formData = getFormData();
    if(!formData['grade']) {
      document.getElementById('grade-all').checked = true;
    }
  }
}

function getFormData() {
  const filters = document.getElementsByClassName('filter');

  let formData = {};
  [...filters].forEach(elm => {
    if(elm.checked) {
      if(elm.value.length > 0) {
        formData[elm.name] = elm.value;
      }
    }
  });
  return formData;
}

function doFilter() {
  const jobs = document.getElementsByClassName('job-post');

  let formData = getFormData();
  let countInvisible = 0;

  [...jobs].forEach(elm => {
    elm.classList.remove('hide');
    for( const [filter, value] of Object.entries(formData)) {
      if(!elm.classList.contains(value)) {
        elm.classList.add('hide');
        countInvisible++;
      }
    };
  });

  const noJobs = document.getElementById('noJobs');
  if(countInvisible == jobs.length) {
    // Everything is invisible
    noJobs.classList.remove('hide')
    console.log('no matching jobs');
  }
  else {
    noJobs.classList.add('hide')
  }

  // Show hot by default, not all
  if(typeof formData.hot === 'undefined') {
    formData.hot = 0;
  }

  const queryString = new URLSearchParams(formData).toString();
  const url = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + queryString;

  // Update our url for sharing.
  window.history.replaceState({path: url}, document.title, url);
}
