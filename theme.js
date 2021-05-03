import { themes } from "mdx-deck";

export default {
  ...themes.prism,
  fonts: {
    body: "Roboto, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: "#333",
    background: "rgb(245, 242, 240)",
    primary: "blue",
  },
  styles: {
    p: {
      color: "#333",
      margin: "20px",
    },
    li: {
      marginBottom: "20px",
    },
    img: {
      height: "700px",
    },
    Slide: {
      padding: 3,
      maxWidth: "1200px",
      margin: "40px auto",
      display: "block",
    },
  },
};
