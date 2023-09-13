import { getVocab, createVocab, updateVocab } from '../api/languageData';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const currentTime = new Date().toLocaleDateString();
      const payload = {
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value,
        time_submitted: currentTime,
        title: document.querySelector('#title').value,
        user_id: `${user.user_id}`
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.user_id).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-Vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const newTime = new Date().toLocaleTimeString();
      const payload = {
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value,
        time_submitted: newTime,
        title: document.querySelectior('#title').value,
        user_id: user.user_id,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.user_id).then(showVocab);
      });
    }
  });
};

export default formEvents;
