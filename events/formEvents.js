import { getVocab, createVocab, updateVocab } from '../api/languageData';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.dispatchEvent.includes('submit-vocab')) {
      const payload = {
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value,
        time_submitted: document.querySelector('#dateTime').value,
        title: document.querySelector('#title').value,
        user_id: user.user_id
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.user_id).then(showVocab);
        });
      });
    }

    if (e.target.dispatchEvent.includes('update-Vocab')) {
      const payload = {
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value,
        time_submitted: document.querySelector('#dateTime').value,
        title: document.querySelectior('#title').value,
        user_id: user.user_id
        // firebasekey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.user_id).then(showVocab);
      });
    }
  });
};

export default formEvents;
