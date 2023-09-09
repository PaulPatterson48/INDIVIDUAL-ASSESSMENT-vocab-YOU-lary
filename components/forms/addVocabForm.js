import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectVocab from './selectVocab';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaeKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
    <div class="form-group">
      <label for="title">Vocabulary</label>
      <input type="text" class-"form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary" value="$obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <textareaclass="form-control" placeholder="Vocabulary Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>
    <div class="form-group" id="select-vocab">
    </div>
    <div class="form-check">
    <input type="checkbox" class="form-check-input" id="" ${obj.langTech ? 'checked' : " '"}>
    <label class="form-check-label" for="langTech"></label>
    </div>
    <button type="submit" class="btn btn-primary">Submit Vocabulary</button>
  </form>
  `;
  renderToDOM('#form-container', domString);
  selectVocab(`${obj.title} || ''}`);
};

export default addVocabForm;
