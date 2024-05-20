import React from 'react';
import { it, expect } from 'vitest';
import { createRoot } from 'react-dom/client';
import App from './App';
import { act } from 'react';

import * as reactClone from './lib/react';
import * as reactDOMClone from './lib/react-dom';

it.skip('Should render the app correctly', () => {
  const rootNode = document.createElement('div');
  const root = createRoot(rootNode);
  act(() => root.render(<App />));
  expect(rootNode.outerHTML).toMatchInlineSnapshot(`
    <div>
      <div>
        <a href="https://vitejs.dev"
           target="_blank"
        >
          <img src="/vite.svg"
               class="logo"
               alt="Vite logo"
          >
        </a>
        <a href="https://react.dev"
           target="_blank"
        >
          <img src="/src/assets/react.svg"
               class="logo react"
               alt="React logo"
          >
        </a>
      </div>
      <h1>
        Vite + React
      </h1>
      <div class="card">
        <p>
          Edit
          <code>
            src/App.tsx
          </code>
          and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  `);
})

it('Should render the app correctly using the clone', () => {
  // globalThis.React = reactClone;
  // React = reactClone;
  // console.log(React);
  // Object.assign(React, reactClone)
  // Reflect.set(React, 'createElement', reactClone.createElement)
  const rootNode = document.createElement('div');
  const root = reactDOMClone.createRoot(rootNode);
  root.render(<App />);
  expect(rootNode).toMatchInlineSnapshot(`
    <div>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            alt="Vite logo"
            class="logo"
            src="/vite.svg"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            alt="React logo"
            class="logo react"
            src="/src/assets/react.svg"
          />
        </a>
      </div>
      <h1>
        Vite + React
      </h1>
      <div
        class="card"
      >
        <p>
          Edit 
          <code>
            src/App.tsx
          </code>
           and save to test HMR
        </p>
      </div>
      <p
        class="read-the-docs"
      >
        Click on the Vite and React logos to learn more
      </p>
    </div>
  `);
})