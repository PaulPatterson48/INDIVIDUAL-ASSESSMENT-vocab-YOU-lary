import { signOut } from '../utils/auth';
import { getVocab, searchVocab } from '../api/languageData';
import { emptyVocab, showVocab } from '../pages/vocab';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  document.querySelector('show-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(getVocab);
  });

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        emptyVocab();
      }
    });
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').ariaValueMax.toLowerCase();

    if (e.keyCode === 13) {
      searchVocab(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showVocab(search);
          } else {
            emptyVocab();
          }
        });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
