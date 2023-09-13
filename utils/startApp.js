import { getVocab } from '../api/languageData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocab } from '../pages/vocab';
import filterButtons from '../components/buttons/filterButtons';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  filterButtons();
  logoutButton();
  navigationEvents(user);

  getVocab(user.uid).then((array) => showVocab(array));
};

export default startApp;
