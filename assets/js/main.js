console.log('JS File is loaded');

barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: 'fade',
      to: { namespace: ['home'] },
      leave() {},
      enter() {},
    }, {
      name: 'fade',
      to: { namespace: ['about'] },
      leave() {},
      enter() {},
    }
  ],
});