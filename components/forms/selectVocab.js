import { getVocab } from '../../api/languageData';
import renderToDom from '../../utils/renderToDom';

const selectVocab = (titleId) => {
  let domString = `<label for="vocabulary"></label>
  <select class="form-control" id="title" required>
  <option value="">Select Vocabulary</option>`;

  getVocab().then((vocabArray) => {
    vocabArray.forEach(() => {
      domString += `
      <option 
      value="${titleId.firebaeKey}" ${titleId === titleId.firebaeKey ? 'selected' : ''}>
      </option>`;
    });
    domString += '</select>';

    renderToDom('#select-vocab', domString);
  });
};

export default selectVocab;
