export function Article() {
  return (
    <article>
      <h2 className="article__title">{"This is my text, don't touch it!"}</h2>
      <label htmlFor="input">This is a label</label>
      <input id="input"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Baseball_in_Japan"
      >
        This is my other text, you can touch this one.
      </a>
    </article>
  );
}
