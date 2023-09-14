/* eslint-disable no-alert */
import {
  deleteVocab, getVocab, getSingleVocab
} from '../api/languageData';
import addVocabForm from '../components/forms/addVocabForm';
import viewVocab from '../pages/viewVocab';
import { showVocab } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey)
          .then(() => getVocab(user.uid))
          .then((vocabs) => showVocab(vocabs));
      }
    }

    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user.uid);
    }

    if (e.target.id.includes('javascript-filter-btn')) {
      getVocab(user.uid).then((vocab) => {
        const javascript = [];
        vocab.forEach((word) => {
          if (word.langTech === 'javascript') {
            javascript.push(word);
          }
        });
        showVocab(javascript);
      });
    }

    if (e.target.id.includes('cSharp-filter-btn')) {
      getVocab(user.uid).then((vocab) => {
        const cSharp = [];
        vocab.forEach((word) => {
          if (word.langTech === 'C#') {
            cSharp.push(word);
          }
        });
        showVocab(cSharp);
      });
    }

    if (e.target.id.includes('json-filter-btn')) {
      getVocab(user.uid).then((vocab) => {
        const json = [];
        vocab.forEach((word) => {
          if (word.langTech === 'json') {
            json.push(word);
          }
        });
        showVocab(json);
      });
    }

    if (e.target.id.includes('python-filter-btn')) {
      getVocab(user.uid).then((vocab) => {
        const python = [];
        vocab.forEach((word) => {
          if (word.langTech === 'python') {
            python.push(word);
          }
        });
        showVocab(python);
      });
    }

    if (e.target.id.includes('java-filter-btn')) {
      getVocab(user.uid).then((vocab) => {
        const java = [];
        vocab.forEach((word) => {
          if (word.langTech === 'java') {
            java.push(word);
          }
        });
        showVocab(java);
      });
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
    }

    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getVocab(firebaseKey).then(viewVocab);
    }
  });
};

export default domEvents;
