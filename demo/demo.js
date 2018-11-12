/* globals Progressor */

const p1 = new Progressor('#default');
const p2 = new Progressor('#size', { size: 200 });
const p3 = new Progressor('#styled');
const p4 = new Progressor('#evented');

const btn = document.getElementById('btn');
let val = 0;

p1.update(0.25);
p2.update(0.5);
p3.update(0.75);

btn.addEventListener('click', () => { p4.update(val += 0.1); });
