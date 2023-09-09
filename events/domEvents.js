/* eslint-disable no-alert */
import {
  deleteVocab, getVocab, getSingleVocab, getVocabDetails
} from '../api/languageData';
import addVocabForm from '../components/forms/addVocabForm';
import viewVocab from '../pages/viewVocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(getVocab).then(viewVocab.showVocab);
      }
    }

    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user.uid);
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
    }

    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getVocabDetails(firebaseKey).then(viewVocab);
    }
  });
};

export default domEvents;
