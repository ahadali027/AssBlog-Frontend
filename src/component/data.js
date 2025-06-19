export const blogPosts = [
  {
    id: 1,
    title: "Understanding the React Lifecycle",
    description: "A deep dive into React component lifecycle methods and how to use them effectively in your apps.",
    content: `
React’s component lifecycle consists of a series of methods that are invoked at different stages of a component's existence. Understanding these stages—mounting, updating, and unmounting—can help you write more predictable and bug-free code.

**Key Methods:**
- constructor()
- componentDidMount()
- shouldComponentUpdate()
- componentDidUpdate()
- componentWillUnmount()

Using hooks like \`useEffect\` simplifies lifecycle management in functional components.

**Example:**
\`\`\`jsx
useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Component unmounted");
}, []);
\`\`\`
    `
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    description: "Learn how to style modern web applications rapidly using utility-first Tailwind CSS classes.",
    content: `
Tailwind CSS is a utility-first framework for building custom designs without leaving your HTML. It offers a powerful set of utility classes for layout, spacing, typography, colors, and more.

**Install with React:**
\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

**Usage Example:**
\`\`\`jsx
<div className="bg-blue-500 text-white p-4 rounded shadow">
  Welcome to Tailwind!
</div>
\`\`\`

Tailwind is highly customizable via \`tailwind.config.js\`.
    `
  },
  {
    id: 3,
    title: "JavaScript ES6 Features You Should Know",
    description: "Explore essential ES6 features like arrow functions, destructuring, and template literals that modernize your code.",
    content: `
ES6 (ECMAScript 2015) introduced several powerful features that simplify JavaScript code.

**Popular Features:**
- Arrow functions: \`() => {}\`
- Destructuring: \`const {name} = user;\`
- Template literals: \`Hello, \${name}\`
- Default parameters, spread/rest operators

**Example:**
\`\`\`js
const greet = ({ name = "Guest" }) => {
  console.log(\`Welcome, \${name}!\`);
};
\`\`\`

Learning ES6 is essential for writing modern JavaScript.
    `
  },
  {
    id: 4,
    title: "How to Build a Todo App with MERN Stack",
    description: "Step-by-step guide to building a full-stack Todo app using MongoDB, Express, React, and Node.js.",
    content: `
The MERN stack is a powerful combination of MongoDB, Express.js, React.js, and Node.js.

**Basic Flow:**
1. **Backend**:
   - Node.js + Express server with API routes
   - MongoDB for storing todos
2. **Frontend**:
   - React app using hooks
   - Fetch API or Axios to interact with the backend

**Example Folder Structure:**
\`\`\`
/client
/server
  - models
  - routes
\`\`\`

**CRUD Operations:**
- Create: \`POST /todos\`
- Read: \`GET /todos\`
- Update: \`PUT /todos/:id\`
- Delete: \`DELETE /todos/:id\`

A great project for full-stack beginners.
    `
  },
  {
    id: 5,
    title: "Deploying Your App with Vercel",
    description: "An easy-to-follow tutorial on deploying your frontend React or Next.js app using Vercel's hosting platform.",
    content: `
Vercel is a cloud platform for frontend frameworks and static sites, built by the creators of Next.js.

**Steps to Deploy:**
1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub account and import the project
4. Configure build settings if needed
5. Click "Deploy"

**Bonus:**
- Custom domains
- Automatic HTTPS
- Fast global CDN

Vercel is perfect for React and Next.js apps with minimal setup.
    `
  }
];
