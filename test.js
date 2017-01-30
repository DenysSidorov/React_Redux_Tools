var txt = 'Привет СУка , такая сука вот , ну ты и падло'.toLowerCase().split(' ').map((el)=>{ return res = (el == 'сука' || el == 'падло') ? 'цензура': el})
.join(' ');

document.write('Привет СУка , такая сука вот , ну ты и падло'
    .toLowerCase()
    .split(' ')
    .map(el => el == 'сука' || el == 'падло' ? 'цензура': el)
    .join(' '));