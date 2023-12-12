export var root = document;
export var createText = root.createTextNode.bind(root);

/**
 * # setProperty
 * Apply a CSS var
 * @param {HTMLElement} el
 * @param {string} varName
 * @param {string|number} value
 */
export function setProperty(
  el: HTMLElement,
  varName: string,
  value: string | number
) {
  el.style.setProperty(varName, String(value));
}

/**
 *
 * @param {!HTMLElement} el
 * @param {!HTMLElement} child
 */
export function appendChild(el: HTMLElement, child: HTMLElement) {
  return el.appendChild(child);
}

export function createElement(
  parent: HTMLElement,
  key: string,
  text: string,
  whitespace: boolean
) {
  var el = root.createElement("span");
  key && (el.className = key);
  if (text) {
    !whitespace && el.setAttribute("data-" + key, text);
    el.textContent = text;
  }
  return (parent && appendChild(parent, el)) || el;
}

/**
 *
 * @param {!HTMLElement} el
 * @param {string} key
 */
export function getData(el: HTMLElement, key: string) {
  return el.getAttribute("data-" + key);
}

/**
 *
 * @param {import('../types').Target} e
 * @param {!HTMLElement} parent
 * @returns {!Array<!HTMLElement>}
 */
/* export type Target = string | Node | NodeList | Element[];

export function $(e: Target, parent?: HTMLElement) {
  return !e || e.length == 0
    ? // null or empty string returns empty array
      []
    : e.hasOwnProperty("nodeName")
    ? // a single element is wrapped in an array
      [e]
    : // selector and NodeList are converted to Element[]
      [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));
} */
