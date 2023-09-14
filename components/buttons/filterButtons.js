import renderToDom from '../../utils/renderToDom';

const filterButtons = () => {
  const domString = `<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn-warning" id="python-filter-btn">Python</button>
  <button type="button" class="btn-danger" id="cSharp-filter-btn">C#</button>
  <button type="button" class="btn-success" id="javascript-filter-btn">JavaScript</button>
  <button type="button" class="btn-secondary" id="java-filter-btn">Java</button>
  <button type="button" class="btn-warning" id="json-filter-btn">JSON</button>
  </div>`;

  renderToDom('#buttons', domString);
};

export default filterButtons;
