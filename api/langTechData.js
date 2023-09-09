import client from '../utils/client';

const endpoint = client.databaseURL;

const getLangTech = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langTech.json?orderBy="uid"&equalTo="${uid}`, {
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

const createLangTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langTech.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getLangTechVocab = (firebaeKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langTech.json?orderBy="langTech_id"&equalTo="${firebaeKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleLangTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langTech/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleLangTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langTech/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateLangTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langTech/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getLangTech, createLangTech, getLangTechVocab, deleteSingleLangTech, updateLangTech, getSingleLangTech
};
