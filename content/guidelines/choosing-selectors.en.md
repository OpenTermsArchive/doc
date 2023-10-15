---
title: "Choosing selectors"
---

# Choosing selectors

Selectors are a vital component of the Open Terms Archive mechanism, serving as precise pointers to the significant sections of terms within web documents. These selectors are based on the [W3C standard](https://www.w3.org/TR/selectors-3/). For a deeper dive into how they function, the Mozilla [learning document](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) is a valuable resource. As web designs and structures evolve, there's a challenge to maintain the relevancy of selectors. This guide aims to outline best practices and considerations when choosing selectors. The selection process retains a degree of subjectivity and is highly contextual.

## The Challenges of Evolving Web Designs

Design changes in web pages can alter their Document Object Model (DOM). These shifts may render previously defined selectors ineffective, requiring adjustments.

## Best Practices for Selector Durability

### Simplicity is Key

Opt for the simplest possible selectors. For instance, `#pageContent` or `[role="main"]`. Evaluate the weight of their [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to ensure stability.

### Descriptive Naming

Selectors like `.tos` or `#legal-notice` are preferred due to their self-explanatory nature. Even if the page design changes, these selectors are more likely to remain relevant.

### Avoid Alphanumeric Sequences

Arbitrary alphanumeric sequences like `.dez68h` can be problematic as they often represent automatically generated or temporary class names, which can change frequently.

### Limit Deep Nesting

Deeply nested selectors like `main > div > #article > .tos` are fragile. Changes to the structure of the DOM can break such specific pathways, causing the selector to fail.

### Avoid Pseudo-Classes

CSS pseudo-classes, like `.tos > div:nth-child(2)`, introduce a dependency on the order or position of elements. Structural changes can easily invalidate these selectors.

### Broad Selection Strategy

Begin by selecting a broader section and refine by removing non-essential parts to ensure no critical content is missed.

### Use Range Selectors

If relevant, leverage [range selectors](https://docs.opentermsarchive.org/contributing-terms/#range-selectors) for content spanning multiple sections.

## Examples

### Example 1

For the following HTML code

```html
...
  <div id="globalContainer" role="main">
    <div class="tos_title">Privacy Policy</div>
    <div class="article_content clearfix" id="tos_content">
       <div class="_3zdf8p">
          <p>Deserunt ea reprehenderit esse dolor adipisicing consectetur aliquip ex magna consequat. Labore eiusmod eiusmod irure enim veniam excepteur commodo laborum et deserunt amet incididunt. Duis id ipsum consequat nulla veniam Lorem elit.<p>
          <p>...</p>
        </div>
    </div>
  </div>
...
```

✅ Some durable selectors could be:

```json
"select": "[role="main"]"
```

or

```json
"select": [
  ".tos_title",
  "#tos_content"
]
```

❌ And brittle selectors could be:

```json
"select": "._3zdf8p"
```

or

```json
"select": "#tos_content > div > p"
```

### Example 2

For the following HTML code

```html
...
  <div class="container">
    <div id="navsub">
      <ul>
        <li class="nav-item">Terms and Conditions of Use</li>
        <li class="nav-item"><a href="/us/legal/copyright-policy/">Copyright Policy</a></li>
        <li class="nav-item"><a href="/us/legal/privacy-policy/">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h1>Terms and Conditions of Use </h1>
      <p>Deserunt ea reprehenderit esse dolor adipisicing consectetur aliquip ex magna consequat.<p>
      <p>...</p>
      <div class="advertising">...</div>
    </div>
  </div>
  <div class="container">
    <footer class=".mh-footer">
      ...
    <footer>
  </div>
...
```

✅ A durable selector could be:

```json
"select": [
  {
    "startAfter": "#navsub",
    "endBefore": ".mh-footer"
  }
],
"remove": ".advertising",
```

❌ A brittle selector could be:

```json
"select": ".container:first-child > div",
```
