import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectVocab from './selectVocab';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaeKey ? `update-Vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
    <div class="form-group">
      <label for="title">Vocabulary</label>
      <input type="text" class-"form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <textarea class="form-control" placeholder="Vocabulary Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>
    <div class="form-group" id="select-vocab">
    </div>
    <div class="form-group">
    <label for="language">Select a Language</label>
    <select class="form-control" id="langTech" required>
    <option value="">Select a Language</option>${obj.langTech || ''}" required>
    <option value="python">Python</option>
    <option value="C#">C#</option>
    <option value="javascript">Javascript</option>
    </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit Vocabulary</button>
  </form>
  `;
  renderToDOM('#form-container', domString);
  selectVocab(`${obj.title} || ''}`);
};

export default addVocabForm;
