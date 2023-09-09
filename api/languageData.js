import client from '../utils/client';
// API calls for vocabulary

const endpoint = client.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo=${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.firebaeKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'applicaton/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getVocabDetails = (firebaeKey) => new Promise((resolve, reject) => {
  getSingleVocab(firebaeKey).then((vocabObj) => {
    resolve({ ...vocabObj });
  }).catch(reject);
});

const searchVocab = (searchValue, uid) => new Promise((resolve, reject) => {
  getVocab(uid).then((vocabArray) => {
    const searchResults = vocabArray.filter((vocabulary) => (
      vocabulary.title.toLowerCase().includes(searchValue)
      || vocabulary.description.toLowerCase().includes(searchValue)
    ));
    resolve(searchResults);
  }).catch(reject);
});

export {
  getVocab,
  deleteVocab,
  getSingleVocab,
  createVocab,
  updateVocab,
  searchVocab,
  getVocabDetails
};
