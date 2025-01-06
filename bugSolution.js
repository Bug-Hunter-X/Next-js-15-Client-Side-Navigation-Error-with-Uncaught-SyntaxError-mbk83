```javascript
// pages/about.js

export default function About() {
  try {
    // This will cause an error
    const myVar = 10;
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page. {myVar}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>An error occurred: {error.message}</p>
      </div>
    );
  }
}
```