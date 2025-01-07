console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (key in languages) {
  console.log(key);
  language = languages[key];
  console.log(language);
  option = document.createElement("option");
  select.append(option);
  option.textContent = language;
  option.setAttribute("value", language);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
for (key2 in nav) {
  let li = document.createElement("li");
  let anchor = document.createElement("a");
  let navSection = nav[key2];
  anchor.setAttribute("href", navSection["href"]);
  anchor.textContent = navSection["text"];
  ul.append(li);
  li.append(anchor);
}

// --^-- write or modify code above this line --^--
