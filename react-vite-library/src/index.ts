import r2wc from "./react-to-web-component";
import { App, Props } from "./App";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "app-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > &
        Props;
    }
  }
}

const component = r2wc(App, {
  props: {
    onCountUpdated: "function",
    title: "string",
    complex: "json",
  },
});
customElements.define("app-component", component);
