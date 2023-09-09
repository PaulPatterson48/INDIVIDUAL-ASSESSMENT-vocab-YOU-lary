import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary Words</h1>';
  renderToDom('#vocabulary', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Book</button>';
  renderToDom('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-vocab-btn--${item.firebaseKey}"></i>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDom('#vocabulary', domString);
};

export { showVocab, emptyVocab };
