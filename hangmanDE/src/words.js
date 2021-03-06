var GERMAN_WORDS = [
  'quizz',
  'zuzög',
  'jazze',
  'jazzt',
  'juchz',
  'zwölf',
  'fuzzi',
  'umzög',
  'zukäm',
  'zuzug',
  'zöpfe',
  'abzög',
  'bezög',
  'böögg',
  'pizza',
  'pizze',
  'zuzog',
  'zücke',
  'zückt',
  'flöze',
  'kötze',
  'pölze',
  'pölzt',
  'zufüg',
  'zugäb',
  'zuzel',
  'zuzle',
  'zwäng',
  'zäpfe',
  'zölom',
  'anzög',
  'ächze',
  'ächzt',
  'fjäll',
  'jähem',
  'kränz',
  'käuze',
  'quarz',
  'quäke',
  'quäkt',
  'quöll',
  'zuhör',
  'zwack',
  'zweck',
  'zwick',
  'zähem',
  'zähme',
  'zähmt',
  'zögen',
  'zücht',
  'erzög',
  'ezzes',
  'fläze',
  'fläzt',
  'fälze',
  'glänz',
  'götze',
  'jerez',
  'jetzo',
  'jetzt',
  'juxen',
  'jödel',
  'klömm',
  'knöpf',
  'kräze',
  'kämpf',
  'kürze',
  'kürzt',
  'mälze',
  'mälzt',
  'mäzen',
  'münze',
  'münzt',
  'plätz',
  'wälze',
  'wälzt',
  'zitze',
  'zunäh',
  'zäume',
  'zäumt',
  'zöger',
  'zöget',
  'zögre',
  'zögst',
  'zölle',
  'zügig',
  'böcke',
  'bütze',
  'bützt',
  'fäzes',
  'fürze',
  'gänze',
  'gäuze',
  'gäuzt',
  'jucke',
  'juckt',
  'juxes',
  'juxet',
  'juxta',
  'juxte',
];

function randomWord() {
  return GERMAN_WORDS[Math.floor(Math.random() * GERMAN_WORDS.length)];
}

export { randomWord };
