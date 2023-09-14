import { getVocab, createVocab, updateVocab } from '../api/languageData';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const currentTime = new Date().toLocaleDateString();
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value,
        time_submitted: currentTime,
        user_id: user.uid
      };

      createVocab(payload).then(({ name }) => {
        console.warn(name);
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-Vocab')) {
      const newTime = new Date().toLocaleTimeString();
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value,
        time_submitted: newTime,
        title: document.querySelectior('#title').value,
        user_id: user.uid,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
