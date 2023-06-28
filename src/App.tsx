import { useState } from 'react'

import cupcakeChocolate from './assets/chocolate.jpg';
import cupcakeFunfetti from './assets/funfetti.jpg';
import cupcakeRedVelvet from './assets/red-velvet.jpg';
import cupcakeVanilla from './assets/vanilla.jpg';

const cupcakes = [
  {
    title: 'Chocolate',
    id: 'chocolate',
    image: cupcakeChocolate,
  },
  {
    title: 'Funfetti',
    id: 'funfetti',
    image: cupcakeFunfetti,
  },
  {
    title: 'Red Velvet',
    id: 'red-velvet',
    image: cupcakeRedVelvet,
  },
  {
    title: 'Vanilla',
    id: 'vanilla',
    image: cupcakeVanilla,
  },
];

import './App.css'

function App() {
  return (
    <div className="max-w-3xl m-auto py-10 px-8">
      <h1 className="text-5xl font-bold mb-10">Cupcakes</h1>
      <div className="grid grid-cols-2 gap-6">
        {cupcakes.map(cupcake => {
          return (
            <div key={cupcake.id} className="card bg-base-100 shadow-xl p-0">
              <figure><img src={cupcake.image} alt="" /></figure>
              <div className="px-8 py-4 pb-6">
                <h2 className="card-title mb-4 text-2xl font-bold">{ cupcake.title }</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App