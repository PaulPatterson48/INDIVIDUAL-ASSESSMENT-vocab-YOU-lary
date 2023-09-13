import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary Words</h1>';
  renderToDom('#vocabulary', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Vocab</button>';
  renderToDom('#add-button', btnString);

  let domString = ' ';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 250px;">
          <h5 class="card-title">${item.title || ''}</h5>
            <p class="card-definition">${item.definition || ''}</p>
            <p class="card-time-submitted">${item.time_submitted || ''}</p>
            <p class="card-langTech">${item.langTech || ''}</p>     
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDom('#vocabulary', domString);
};

export { showVocab, emptyVocab };
