# Next.js 15 Client-Side Navigation Error

This repository demonstrates a bug in Next.js 15 where a runtime error on a client-side navigated page is not properly handled, resulting in a blank page instead of a user-friendly error message.  The issue arises when a syntax error exists within a component on a page accessed via client-side navigation (e.g., using Next.js's Link component).

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the homepage (`http://localhost:3000`).
5. Click the link to go to the "About" page.
6. Observe a blank page instead of an error message.

## Expected Behavior

A user-friendly error message should be displayed indicating the syntax error in the `about.js` file.

## Actual Behavior

A blank page is displayed.  The browser's developer console will show the uncaught syntax error.  This makes debugging difficult for the end-user.