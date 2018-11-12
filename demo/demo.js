/* globals Progressor */

const p1 = new Progressor('body');
const p2 = new Progressor('body', { size: 200 });

p1.update(0.5);
p2.update(0.2);
