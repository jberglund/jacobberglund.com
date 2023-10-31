---
title: 'A sample test for syntax highlightning'
description: 'You know what it is'
pubDate: 'Oct 31 2023'
takeaways: ['hey', 'du']
---

```html
<script>
  let count = 0

  function handleClick() {
    count += 1
  }
</script>

<button on:click="{handleClick}">
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

```css
.some-class{
  --custom-properties: 100svh;
  display: grid;
  grid-columns: 1/-1;
}
```

```ts
import { object, string } from 'valibot'; // 0.63 kB

// TypeScript
type LoginForm = {
  email: string;
  password: string;
};

// Valibot
const LoginSchema = object({
  email: string(),
  password: string(),
});
```