import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const BlogDisplay = ({ blog }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch(`/markdown/${blog}`)
      .then((res) => res.text())
      .then((blog) => setText(blog))
      .catch((err) => console.log("NOPE"));
  }, []);
  return (
    <div className="entry-blog">{text && <Markdown>{text}</Markdown>}</div>
  );
};

export default BlogDisplay;
