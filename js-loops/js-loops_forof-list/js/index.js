console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (language of programmingLanguages) {
  let li = document.createElement('li');
  ol.append(li);
  li.innerHTML = language
  
}
// --^-- write or modify code above this line --^--
