import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaeKey ? `update-Vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
    <div class="form-group">
      <label for="title">Vocabulary</label>
      <input type="text" class="form-control" placeholder="Enter Vocabulary Title" id="title" aria-describedby="vocabTitle"  value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <textarea class="form-control" placeholder="Vocabulary Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>
    <div class="form-group">
    <label for="time_submitted">DateTime</label>
    <option class="color"  value="">${obj.time_submitted || ''}"</option>
    </div>
   <div class="form-group">
    <select class="form-control" id="langTech" required>
    <option value="">Select a Language</option>${obj.langTech || ''}" required>
    <option value="python">Python</option>
    <option value="c#">C#</option>
    <option value="javascript">Javascript</option>
    <option value="java">Java</option>
    <option value="json">JSON</option>
    </select>
    </div>
    <div class="form-group" id="dateTime"></div>
    <button type="submit" class="btn btn-primary">Submit Vocabulary</button>
  </form>
  `;
  renderToDOM('#form-container', domString);
};

export default addVocabForm;
