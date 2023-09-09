// for merged promises

import { deleteSingleLangTech, getLangTechVocab, getSingleLangTech } from './langTechData';
import { deleteVocab, getSingleVocab } from './languageData';

const getVocabDetails = (firebaeKey) => new Promise((resolve, reject) => {
  getSingleVocab(firebaeKey).then((vocabObj) => {
    getSingleLangTech(vocabObj.langTech_id).then((langTechObject) => {
      resolve({ ...vocabObj, langTechObject });
    });
  }).catch(reject);
});

const getLangTechDetails = async (firebaeKey) => {
  const langTech = await getSingleLangTech(firebaeKey);
  const vocabulary = await getLangTechVocab(langTech.firebaeKey);

  return { ...langTech, vocabulary };
};

const deleteVocabLangTechRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getLangTechVocab(firebaseKey).then((langTechVocabArray) => {
    const deleteVocabPromises = langTechVocabArray.map((vocab) => deleteVocab(vocab.firebaeKey));

    Promise.all(deleteVocabPromises).then(() => {
      deleteSingleLangTech(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  getVocabDetails, getLangTechDetails, deleteVocabLangTechRelationship
};
