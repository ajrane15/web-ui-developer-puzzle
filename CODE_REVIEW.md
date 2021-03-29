Problems:
    1. Memory leak in book-search.component.ts file at line number 35, a subscription is made to the store but has not been unsubscribed.
    2. Multiple subscriptions made using AsynPipe in reading-list.component.html file on line 1 and 2.
    3. Function formatDate found in book-search.component.ts on line number: 41 is missing a return type.

Accessibility issues:
    1. Buttons do not have an accessible name.
    2. Background and foreground colors do not have a sufficient contrast ratio.
    3. Interactive elements must be keyboard focusable
    4. As the search bar is a single line hence added aria-multiline to false.
    5. Added a contenteditable attribute to indicate the input text is not read-only.