import { getVocab } from '../api/languageData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigatoinEvents';
import { emptyVocab, showVocab } from '../pages/vocab';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user);
  formEvents(user);
  navigationEvents(user);
  logoutButton();

  getVocab(user.uid).then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      emptyVocab();
    }
  });
};

export default startApp;
