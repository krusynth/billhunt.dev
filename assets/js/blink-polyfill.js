(function () {
  const html = document.getElementsByTagName('html')[0];
  const style = document.createElement('style');
  style.innerHTML = `
    blink {
      animation: 4s linear infinite html4_blink;
    }
    @keyframes html4_blink {
      0% {
       visibility: visible;
      }
      50% {
        visibility: hidden;
      }
      100% {
        visibility: hidden;
      }
    }`;
    html.prepend(style)
})();


