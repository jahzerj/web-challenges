import {cards} from './utils/cards.js'
import { Header } from './components/Header/Header.js';
import { Form } from './components/Form/Form.js';
import { Bookmark } from './components/Bookmark/Bookmark.js';
import formHandle from './utils/formsubmit.js';










function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
