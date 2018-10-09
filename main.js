var loadingAnimation = anime ({
  targets: 'div.circle',
  translateY: [
    {
      value: -40,
      duration: 200,
      easing: 'linear'
    }
  ],
  backgroundColor: [
    {
      value: '#D3D3D3',
      duration: 200,
      easing: 'linear'
    }
  ],
  opacity: [
    {
      value: 0,
      duration: 1,
      delay: 500
    }
  ],
  delay: function(el, i, l) {return i * 150},
});
