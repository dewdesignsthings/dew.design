console.log('JS File is loaded');

barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: '',
      to: { namespace: ['home'] },
      once: () => {},
      leave() {},
      enter() {},
    }, {
      name: '',
      to: { namespace: ['about'] },
      leave() {},
      enter() {},
    }
  ],
});