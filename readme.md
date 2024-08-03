

# React Learning Repository
This repository is a learning resource for React. It contains a restaurant UI website built with React, along with explanations in Hinglish in the README.md file. Feel free to explore the code and suggest any improvements or corrections to the README.md file.
---

## <span style="color:yellow;"> ESP - 1 </span>

**React**: React ek JavaScript library hai jo web development mein use hoti hai.

### <span style="color:pink;">CDN of React: Core React and React DOM</span>
```html
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
```

### <span style="color:pink;">1. Hello World in HTML, JS, and React</span>
#### Example Code in React 
```javascript
let h1 = React.createElement("h1", {}, [
  React.createElement("h2", {}, "this is inside a div"),
  React.createElement("h3", {}, "this is inside a div")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
```

**Modularity**: React ko choti jagah pe apne website mein integrate kiya ja sakta hai, allowing for modular development.

### <span style="color:pink;">React.createElement Method</span>

- <span style="color:yellow;">`React.createElement`</span> ek method hai jo React element banata hai. Yeh teen arguments leta hai: type, props, aur children.
  - **Type**: Ek string jo element ke type ko represent karti hai.
  - **Props**: Ek object jo element ke properties ko set karta hai.
  - **Children**: Ek string ya strings ka array jo element ke content ko represent karta hai.

- **React.createElement** method ek JavaScript object return karta hai jo ek React element hota hai. Yeh object DOM node ko represent karta hai.

### <span style="color:pink;">ReactDOM.render</span>

- **ReactDOM.render** function is object ko HTML mein convert karta hai aur ise specified root element mein render karta hai.

### <span style="color:pink;">Targeted Rendering</span>

- **React sirf root element ke andar render hota hai**, isliye agar koi content root element ke bahar ya uske baad likha jata hai, toh wo apply nahi hota.

### <span style="color:pink;">Efficient Management</span>

- **React ek library hai jo hum kahi bhi apni website pe, kisi choti jagah pe bhi use kar sakte hain**. Yeh modular development ko allow karta hai.
-Is tareeke se, hum apne web applications ko efficiently manage aur deploy kar sakte hain, aur users ko seamless experience provide kar sakte hain.

### <span style="color:pink;">Key Points</span>

1. **React ek JavaScript library hai jo web development mein use hoti hai**.
2. **React.createElement method ek JavaScript object return karta hai jo React element ke roop mein jaana jata hai**.
3. **ReactDOM.render function se HTML mein convert karke specified root element mein render karte hain**.
4. **React sirf root element ke andar render hota hai**.
5. **React ko choti jagah pe apne website mein integrate kiya ja sakta hai, allowing for modular development**.
6. **Efficiently manage aur deploy kar sakte hain, aur users ko seamless experience provide kar sakte hain**.

---

## <span style="color:yellow;"> ESP - 2 </span>

### <span style="color:pink;">1. npx</span>
`npx` means execute a package in Node.

### <span style="color:pink;">2. Versioning in package.json</span>
<span style="color:orange;">^</span> in `package.json` indicates minor updates (caret).  
<span style="color:orange;">~</span> in `package.json` indicates patch updates (tilde).

```javascript
"dependencies": {
    "daisyui": "^4.12.10",
    "parcel": "^2.12.0",
    "react": "^18.3.1",
}
```

### <span style="color:pink;">3. Transitive Dependencies</span>
<span style="color:red;">Transitive dependencies</span> occur when your dependency requires another dependency.

### <span style="color:pink;">4. Hot Module Replacement (HMR)</span>
<span style="color:green;">HMR</span> is done by the File Watching Algorithm (C++). Fast build times are achieved using parcel's caching mechanism. Clearing all the cache.

### <span style="color:pink;">GitHub Repository</span>
[GitHub Repository](https://github.com/chetannada/Namaste-React)

---

## ESP - 3## <span style="color:yellow;"> ESP - 3 </span>

### <span style="color:pink;">1. Start Command</span>
#### `start` is the keyword reserved by npm, `npm run start === npm start`
```javascript
"start": "parcel src/index.html",
```

### <span style="color:pink;">2. React Elements</span>
React elements are normal objects, but when rendered in the browser, they are converted into DOM elements. When we use `React.render`, whatever is written in the div with id root is replaced by the rendered element.

### <span style="color:pink;">3. JSX</span>
JSX is not HTML in JavaScript. It is XML-like syntax. JSX is created to make developers' lives easier.
  - **We are writing code for machine and for developer (Human readable)**, but first priority is Human readable, that is for developer.
  - **JSX is transpiled before it reaches the JS Engine.**
  - **Transpilation is done by Parcel, but more deeply, this is done by Babel.**
  - **JSX is nothing but `React.createElement`**, then this `React.createElement` is a JS object, this is done by Babel.
  - **If we write the JSX in multi-line, then wrap the JSX into ()**.

---

## <span style="color:yellow;"> ESP - 4 & 5 </span>

### <span style="color:pink;">React Components</span>
1. **Class-Based Components** - Old
2. **Function-Based Components** - New

  #### Function-based components or the React component is nothing but the JavaScript functions that return some part of JSX.

### <span style="color:pink;">Config Driven Approach for UI</span>
   #### A config-driven approach for UI means defining the UI's layout, style, and behavior using configuration files (like JSON or YAML) instead of hard-coding them. This method allows for easier updates and maintenance, as changes can be made by simply updating the configuration files without altering the underlying code.

### <span style="color:pink;">State Variables using useState Hook</span>
- Whenever a state variable changes, React re-renders the component. In React 16, the React Fiber algorithm efficiently updates the DOM using a virtual DOM. (JAB STATE Variables change hote hain tab pura component rerender hota hai)
- Used for creating local state variables inside a functional component.
- State variables should not be created inside loops, if-else blocks, or functions' scopes. They should be created directly inside the functional component.
- Whenever state variables update, React triggers a reconciliation cycle (re-renders the component), but it only updates the targeted state variable only.

### <span style="color:pink;">useEffect Hook</span>
- The callback function in `useEffect()` is called after the React component is rendered.
- If the dependency array is absent, the callback function is called on every render.
- If the dependency array is empty [], the callback function is called only once after the initial render.
- If dependencies are present [dep1, dep2, ...], the callback function is called when the dependencies are updated.

### <span style="color:pink;">Hooks</span>
#### * React 16.8 version came with hooks.
#### * Hooks are the functions that allow us to use state and other React features without writing a class.
#### * The name of hooks must start with "use."
#### * Hooks can only be called at the top level of a React function component. They cannot be called inside loops, conditional statements, or nested functions.
#### * Hooks are used to add state and other React features to function components.

### <span style="color:pink;">React Fiber and Efficient DOM Manipulation</span>
In React 16, a new algorithm called React Fiber was introduced to update the DOM. React achieves efficient DOM manipulation by using a Virtual DOM. React Fiber enhances this process with its new reconciliation algorithm.

### <span style="color:pink;">Key Points</span>
- **React Fiber**: Introduced in React 16, React Fiber is a new reconciliation algorithm that optimizes the process of updating the DOM.
- **Efficient DOM Manipulation**: React uses a Virtual DOM to efficiently manage and update the actual DOM.
- **React Fiber Algorithm**: React Fiber provides a more granular and flexible approach to updating the DOM, leading to better performance and responsiveness.

### <span style="color:pink;">What is Reconciliation?</span>
Reconciliation wo algorithm hai jo React use karta hai ek tree ko dusre tree se diff karne ke liye, taaki pata chal sake ki kaunse parts ko change karna hai.
- **Update**: Ek change data mein jo React app ko render karne ke liye use hota hai. Usually `setState` ke result mein hota hai. Yeh eventually re-render hota hai.

React ka central idea yeh hai ki updates ko aise socho jaise ki woh poore app ko

 re-render kar dete hain. Yeh developer ko declaratively sochne ka mauka deta hai, instead of worrying about how to efficiently transition the app from one state to another (A to B, B to C, C to A, etc.).

### <span style="color:pink;">What is a Fiber?</span>
Fiber ek unit of work ko represent karta hai. React components ko data ke functions ki tarah sochne par, rendering React app ek function call karne jaisa hai jiska body dusre functions ko call karta hai, aur aise hi chalta rehta hai.

Fiber ek virtual stack frame hai jo customized call stack behavior ke saath rendering UIs ko optimize karta hai.

### <span style="color:pink;">Diffing Algorithm</span>
- **Diffing**: React ka algorithm jo ek tree ko dusre tree se diff karne ke liye use karta hai. Yeh algorithm ek tree ko ek other tree se compare karta hai, aur pata karne ke liye ki kaunse parts ko change karna hai.

Here’s the updated content for ESP - 6 and ESP - 7, with headings in pink and using Markdown formatting:

---

## <span style="color:yellow;"> ESP - 6 </span>

### <span style="color:pink;">Monolithic vs Microservices</span>
- **Monolithic**: All services are in one project (frontend, backend, API, SMS sending).
- **Microservices**: Different small services (UI, backend API, message sending) combine to form a big project. This follows the "separation of concerns" and single responsibility principle.
  - **Separation of Concerns**: Each service is responsible for a specific part of the project, ensuring clear boundaries and maintainability.
  - **Single Responsibility Principle**: Each service performs its own job, focusing on a single task or functionality.

### <span style="color:pink;">CORS</span>
- **CORS (Cross-Origin Resource Sharing)** ek security feature hai jo web browsers mein hota hai. Ye allow karta hai servers ko yeh batane ke liye ki kaunse domains unke resources access kar sakte hain.
- CORS HTTP headers use karta hai browser ko yeh batane ke liye ki dusre domains se aane wale requests allowed hain ya nahi. Isse sirf trusted domains hi cross-origin requests kar sakte hain, jo users ko malicious activities se protect karta hai.
#### To Bypass CORS
- **For Local Host Only**: Using the Allow CORS Chrome extension (Allow CORS), we can bypass CORS.
- **For Online**: We can use platforms like [enable-cors](https://enable-cors.org/).

### <span style="color:pink;">Shimmer UI</span>
- A **Shimmer UI** is a visual effect used to show that content is loading on a webpage. Instead of displaying a traditional loading screen, a shimmer effect displays a placeholder with a moving highlight or gradient. This moving shimmer creates the illusion that content is being loaded, making the wait feel shorter and more engaging.

---

## <span style="color:yellow;"> ESP - 7 </span>

### <span style="color:pink;">Routing Approaches</span>
1. **Client-side Routing**: Yeh routing browser ke andar hoti hai. Jab aap ek link pe click karte hain, toh page reload nahi hota. Sirf content update hota hai bina server se naye page ko request kiye. React Router jaise libraries is approach ko use karti hain.
2. **Server-side Routing**: Yeh routing server pe hoti hai. Jab aap ek link pe click karte hain, toh browser server se naye page ka request bhejta hai aur server se naya HTML page load hota hai. Is approach mein page reload hota hai har baar jab aap ek naye route pe jaate hain.

### <span style="color:pink;">Routing with react-router-dom</span>
```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestroCards />
      },
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);
```

### <span style="color:pink;">useRouteError</span>
The `useRouteError` hook in React Router is used to handle errors in your route components. When a route encounters an error, this hook helps you access the error details.
#### How It Works:
1. **Error Handling**: It retrieves error information that occurred during routing, such as a 404 or 500 status.
2. **Error Display**: You can use this error information to display an error message or page to the user.

### Example
```jsx
import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError(); // Accesses error details

  return (
    <>
      <p>{err.status} - {err.statusText}</p> {/* Displays error status and message */}
    </>
  );
};

export default Error;
```
In this example, if a route fails or encounters an error, `useRouteError` provides the error details (`err.status` and `err.statusText`) which are then displayed to the user.

##### Use Cases:
- **Custom Error Pages**: Displaying a custom error page when a route fails.
- **Debugging**: Logging error details for debugging purposes.
- **User Feedback**: Providing user-friendly error messages.

#### <span style="color:pink;">Outlet</span>
In React, `<Outlet />` is used with React Router to handle nested routes. It displays child components inside a parent component.
- **Parent Component**: Contains the `<Outlet />` and defines the layout of the app.
- **Child Components**: Rendered inside the `<Outlet />` based on the current URL.
- **Dynamic Rendering**: React Router updates the content inside `<Outlet />` as the URL changes, allowing for flexible navigation.

```javascript
import { Outlet } from 'react-router-dom';

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Outlet />
    </div>
  );
}
```

### <span style="color:pink;">Links in React</span>
- **`<Link>` Component**: Use the `<Link>` component from `react-router-dom` for navigation in React applications. It updates the URL and renders the appropriate component without reloading the entire page. This improves performance and maintains the single-page application (SPA) behavior.
- **Avoid `<a>` Tags**: Using traditional `<a>` tags causes a full page reload, which refreshes the whole website. This can make navigation slower and less efficient in SPAs.

### Example
```javascript
import { Link } from "react-router-dom";

<Link to='/home'>Home</Link> {/* Use this for navigation */}
```

### <span style="color:pink;">React Single Page Application</span>
- A **Single Page Application (SPA)** is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This means that an SPA can have a fast response time and a smoother user experience.
- **Single Page Application (SPA)**: React is an SPA, which means the whole application runs on a single HTML page. Instead of loading new pages from the server, React dynamically updates the content on the same page.
- **Rendering and Updating**: When you navigate through different routes or pages, React only updates parts of the page that change. It doesn’t reload the whole page; instead, it renders new components and removes old ones as needed.

### <span style="color:pink;">React Best Practices</span>
1. **Hooks**: Don’t use hooks inside `if-else` blocks.
2. **Strings**: Avoid hard-coded strings in component files.
3. **Exports/Imports**: Use named and default exports/imports in the same file.
4. **Component Length**: Keep components under 100 lines of code.


---


