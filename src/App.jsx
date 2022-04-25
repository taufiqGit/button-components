import { useState } from 'react'
import './App.css'
import Button from './components/atoms/button'
import Color from './components/organism/color'
import Disable from './components/organism/disable'
import Size from './components/organism/size'
import Variant from './components/organism/variant'
import WithIcon from './components/organism/withIcon'

function App() {

  return (
    <main className="container">
      <aside>
          <h2>My Components</h2>
          <ul>
            <li>Colors</li>
            <li>Typhography</li>
            <li>Spaces</li>
            <li className='btn-aside-active'>Buttons</li>
            <li>Inputs</li>
            <li>Grid</li>
          </ul>
      </aside>
      <section>
        <h2>Buttons</h2>
        <Variant/>
        <Disable/>
        <WithIcon/>
        <Size/>
        <Color/>
      </section>
    </main>
  )
}

export default App
