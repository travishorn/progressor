/* globals Progressor */

const p1 = new Progressor('#default');
const p2 = new Progressor('#size', { size: 200 });
const p3 = new Progressor('#styled');
const p4 = new Progressor('#evented');
const p5 = new Progressor('#customImage', {
  image: 'horse.png',
  size: 52,
});

const btn = document.getElementById('btn');
let val = 0;

p1.update(0.2);
p2.update(0.4);
p3.update(0.6);
p5.update(0.8);

btn.addEventListener('click', () => { p4.update(val += 0.1); });
