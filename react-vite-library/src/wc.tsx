import { render, unmountComponentAtNode } from "react-dom";
import { App, Props } from "./App";

export class AppElement extends HTMLElement {
  observer: MutationObserver;
  inner = "";
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this.inner = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    const props = {
      ...(this.getProps(this.attributes) as Props),
      ...this.getEvents(),
      children: this.parseHtmlToReact(this.innerHTML),
    };

    render(<App {...props} />, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

  parseHtmlToReact(html: string) {
    return html;
  }

  getProps(attributes: any) {
    return [...attributes]
      .filter((attr) => attr.name !== "style")
      .map((attr) => this.convert(attr.name, attr.value))
      .reduce((props, prop) => ({ ...props, [prop.name]: prop.value }), {});
  }

  getEvents() {
    return Object.values(this.attributes)
      .filter((key) => /on([a-z].*)/.exec(key.name))
      .reduce(
        (events, ev) => ({
          ...events,
          [ev.name]: (args: any) =>
            this.dispatchEvent(new CustomEvent(ev.name, { ...args })),
        }),
        {}
      );
  }

  convert(attrName: any, attrValue: any) {
    let value = attrValue;
    if (attrValue === "true" || attrValue === "false")
      value = attrValue === "true";
    else if (!isNaN(attrValue) && attrValue !== "") value = +attrValue;
    else if (/^{.*}/.exec(attrValue)) value = JSON.parse(attrValue);
    return {
      name: attrName,
      value: value,
    };
  }
}
