class FormReplacer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <slot></slot>
    `;

    const form = this.querySelector("form");
    if (form) {
      form.addEventListener("submit", this.handleSubmit.bind(this));
      this.setupValidation(form);
    }
  }

  setupValidation(form) {
    const inputs = form.querySelectorAll("[form-replacer-validate]");
    inputs.forEach((input) => {
      input.addEventListener("blur", this.handleValidation.bind(this));
    });
  }

  async handleValidation(event) {
    const input = event.target;
    const form = input.closest("form");
    const fieldset = input.closest("fieldset");
    const groupSelector = fieldset
      ? `fieldset:nth-of-type(${
          Array.from(form.querySelectorAll("fieldset")).indexOf(fieldset) + 1
        })`
      : "";

    const formData = new FormData(form);
    formData.append(input.name, input.value);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          "X-Validate-Name": input.name,
          "X-Validate-Group": groupSelector,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      const validateName = response.headers.get("X-Validate-Name");
      const validateGroup = response.headers.get("X-Validate-Group");

      if (validateName && validateGroup) {
        this.updateValidatedGroup(html, validateGroup);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  updateValidatedGroup(html, selector) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const newContent = doc.querySelector(selector);

    if (newContent) {
      const existingContent = this.querySelector(selector);
      if (existingContent) {
        existingContent.replaceWith(newContent);
      }
    }
  }

  async handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      this.innerHTML = html;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

customElements.define("form-replacer", FormReplacer);
