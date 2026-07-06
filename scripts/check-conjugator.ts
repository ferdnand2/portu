/**
 * Verificación del motor de conjugación: casos delatores.
 * Ejecutar: npx esbuild scripts/check-conjugator.ts --bundle --format=esm \
 *   --outfile=.verify-shots/check-conjugator.mjs && node .verify-shots/check-conjugator.mjs
 */
import { conjugate } from '../src/domain/conjugator';
import { findVerb } from '../src/data/reference/verbos';

let failures = 0;

function check(verbId: string, path: string, expected: string) {
  const verb = findVerb(verbId);
  if (!verb) {
    console.log(`✗ verbo no encontrado: ${verbId}`);
    failures++;
    return;
  }
  const c = conjugate(verb);
  const [tenseId, idx] = path.split('.');
  let actual: string | undefined;
  if (tenseId === 'imperativo-tu') actual = c.imperativo.tu;
  else if (tenseId === 'imperativo-voce') actual = c.imperativo.voce;
  else if (tenseId === 'gerundio') actual = c.gerundio;
  else if (tenseId === 'participio') actual = c.participio;
  else if (tenseId === 'participioAlt') actual = c.participioAlt;
  else actual = c.tenses.find((t) => t.id === tenseId)?.forms[Number(idx)];
  if (actual === expected) {
    console.log(`✓ ${verbId} ${path} = ${expected}`);
  } else {
    console.log(`✗ ${verbId} ${path}: esperado «${expected}», salió «${actual}»`);
    failures++;
  }
}

// ser / ir comparten pasado; subjuntivos derivados
check('ser', 'presente.0', 'sou');
check('ser', 'subj-futuro.0', 'for');
check('ser', 'subj-imperfeito.3', 'fôssemos');
check('ser', 'imperativo-tu', 'sê');
check('ir', 'subj-futuro.2', 'for');
check('ir', 'imperativo-tu', 'vai');
// ter: la estrella del B2
check('ter', 'subj-futuro.1', 'tiveres');
check('ter', 'subj-presente.0', 'tenha');
check('ter', 'imperfeito.0', 'tinha');
// fazer / dizer / trazer: futuro sincopado
check('fazer', 'futuro.0', 'farei');
check('fazer', 'subj-presente.0', 'faça');
check('fazer', 'subj-futuro.0', 'fizer');
check('fazer', 'participio', 'feito');
check('dizer', 'futuro.2', 'dirá');
check('trazer', 'condicional.0', 'traria');
// ortográficos
check('ficar', 'perfeito.0', 'fiquei');
check('ficar', 'subj-presente.0', 'fique');
check('chegar', 'perfeito.0', 'cheguei');
check('comecar', 'perfeito.0', 'comecei');
check('comecar', 'subj-presente.0', 'comece');
check('conhecer', 'presente.0', 'conheço');
check('conhecer', 'subj-presente.0', 'conheça');
check('pagar', 'participioAlt.', 'pago');
// semi-irregulares: subj presente derivado de la 1ª persona
check('dormir', 'presente.0', 'durmo');
check('dormir', 'presente.1', 'dormes');
check('dormir', 'subj-presente.0', 'durma');
check('pedir', 'subj-presente.2', 'peça');
check('seguir', 'subj-presente.0', 'siga');
check('ouvir', 'subj-presente.0', 'ouça');
check('perder', 'subj-presente.0', 'perca');
// overrides completos
check('querer', 'subj-presente.0', 'queira');
check('saber', 'subj-presente.0', 'saiba');
check('vir', 'subj-futuro.0', 'vier');
check('vir', 'perfeito.3', 'viemos');
check('por', 'futuro.0', 'porei');
check('por', 'subj-futuro.0', 'puser');
check('por', 'gerundio', 'pondo');
check('sair', 'imperfeito.0', 'saía');
check('ler', 'perfeito.1', 'leste');
check('ler', 'subj-presente.0', 'leia');
check('estar', 'subj-futuro.0', 'estiver');
// regulares
check('falar', 'subj-imperfeito.3', 'falássemos');
check('falar', 'inf-pessoal.3', 'falarmos');
check('falar', 'imperativo-voce', 'fale');
check('comer', 'imperativo-tu', 'come');
check('comer', 'subj-imperfeito.0', 'comesse');
check('abrir', 'participio', 'aberto');
check('escrever', 'participio', 'escrito');

console.log(failures === 0 ? '\nTODO OK' : `\n${failures} FALLOS`);
process.exit(failures === 0 ? 0 : 1);
