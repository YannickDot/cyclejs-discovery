import Cycle from '@cycle/core';
import {h, makeDOMDriver} from '@cycle/dom';

function main(responses) {
  console.log('coucou toi');
  const requests = {
    DOM: responses.DOM.select('.field').events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        h('div', [
          h('label', 'Name:'),
          h('input.field', {attributes: {type: 'text'}}),
          h('h1', 'O Hai ?' + name)
        ])
      )
  };

  return requests;
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app-container')
});
