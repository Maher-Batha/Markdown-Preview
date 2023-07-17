import { useState } from "react";
import ReactMarkdown from "react-markdown";
const App = () => {
  const [markdown, setMarkdown] = useState("# Markdown preview");
  return (
    <main>
      <section className="container markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};
export default App;
