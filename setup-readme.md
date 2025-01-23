To set up a Node.js project with TypeScript, you can follow these steps:

### 1. **Initialize a Node.js Project**

If you haven't already initialized a Node.js project, start by running this command in your project folder:

```bash
npm init -y
```

This creates a `package.json` file with default values.

### 2. **Install TypeScript and Node.js Types**

Next, you need to install TypeScript and the types for Node.js. Run this:

```bash
npm install typescript @types/node --save-dev
```

This installs TypeScript as a development dependency and the type definitions for Node.js.

### 3. **Initialize TypeScript Configuration**

To create a TypeScript configuration file (`tsconfig.json`), run:

```bash
npx tsc --init
```

This will generate a `tsconfig.json` file. The default config should work for most cases, but you might want to modify a couple of settings to suit your needs:

#### Example `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6", // Compile to ES6
    "module": "commonjs", // Node.js module system
    "strict": true, // Enable all strict type-checking options
    "esModuleInterop": true, // Allow import of CommonJS modules
    "skipLibCheck": true, // Skip type checking of declaration files
    "outDir": "./dist", // Output directory for compiled JavaScript
    "rootDir": "./src" // Root directory for TypeScript files
  },
  "include": [
    "src/**/*.ts" // Include all .ts files in the src directory
  ],
  "exclude": [
    "node_modules" // Exclude node_modules from TypeScript compilation
  ]
}
```

### 4. **Set Up Your Project Structure**

Now create a basic folder structure. Here’s a common one:

```bash
/your-project
  /src
    index.ts
  /dist
  package.json
  tsconfig.json
```

Put your TypeScript files inside the `src` folder, and TypeScript will compile them to JavaScript in the `dist` folder.

### 5. **Write Your TypeScript Code**

You can now write TypeScript code in `src/index.ts`. For example:

```ts
// src/index.ts
console.log("Hello, TypeScript with Node.js!");
```

### 6. **Compile TypeScript**

To compile TypeScript files into JavaScript, run:

```bash
npx tsc
```

This will compile your files into the `dist` folder as specified in `tsconfig.json`.

### 7. **Run Your Code**

Now, you can run the compiled JavaScript with Node.js:

```bash
node dist/index.js
```

### 8. **(Optional) Set Up a Watch Mode**

If you want TypeScript to automatically compile when you make changes, you can use the `--watch` flag:

```bash
npx tsc --watch
```

This will automatically recompile your TypeScript files whenever you make changes.

### 9. **Add npm Scripts (Optional)**

To simplify things, you can add a couple of npm scripts to your `package.json` to make building and running your project easier. For example:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc --watch"
}
```

Now you can run:

- `npm run build` to compile your TypeScript
- `npm run start` to run your compiled JavaScript
- `npm run dev` to watch for file changes and auto-compile TypeScript

---

With that, you should be all set up to write and run Node.js code using TypeScript.
