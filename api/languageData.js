//import client from '../utilities/client';
//API calls for vocabulary

const endpoint = client.databaseURL;

const getVocal = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo=${uid}"`)
})
