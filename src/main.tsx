import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Route } from "wouter";

import App from './App.tsx'
import About from './About.tsx'
import Cupcake from './Cupcake.tsx'

import './index.css'

const Router = () => (
  <div>
    <div className="max-w-3xl m-auto py-2 px-8">
      <div className="flex gap-4 text-lg">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
      </div>
    </div>

    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/cupcakes/:id">
      {params => <Cupcake id={params.id} />}
    </Route>
  </div>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
