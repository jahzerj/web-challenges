import {cards} from './utils/cards.js'
import { Header } from './components/Header/Header.js';
import { Form } from './components/Form/Form.js';
import { Bookmark } from './components/Bookmark/Bookmark.js';
import { CardList } from './components/CardList/Cardlist.js';
import { App } from './components/App/App.js';
import formHandle from './utils/formsubmit.js';


// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
