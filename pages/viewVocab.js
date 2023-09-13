import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewVocab = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
    <img src=${obj.image} alt=${obj.title} style="width: 300px;">
      <div class="mt-5">
        <i id="edit-vocab-btn--${obj.firebaseKey}" class="fas fa-edit btn-info"></i>
        <i id="delete-vocab-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trach-alt"></i>
      </div>
     </div>
  <div class="text-white ms-5 details">
  <h5>${obj.title} by ${obj.vocabObj} </h5>
  <p>${obj.definition || ''}</p>
  <p>${obj.time_submitted || ''}</p>
  <p>${obj.langTech || ''}</p>
  </div>
</div>`;

  renderToDom('#view', domString);
};

export default viewVocab;
