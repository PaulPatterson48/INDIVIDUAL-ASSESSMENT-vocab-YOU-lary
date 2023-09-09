import { getVocab } from '../../api/languageData';
import renderToDom from '../../utils/renderToDom';

const selectVocab = (title) => {
  let domString = `<label for="vocab">Search Vocabulary</label>
  <select class="form-control" id="title" required>
  <option value="">Select a Word</option>`;

  getVocab().then((vocabArray) => {
    vocabArray.forEach(() => {
      domString += `
      <option value="${title.firebaeKey}"
      ${title === title.firebaeKey ? 'selected' : ''}>
      </option>`;
    });
    domString += '</select>';

    renderToDom('#select-vocab', domString);
  });
};

export default selectVocab;
