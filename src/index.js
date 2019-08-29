// @flow
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
// import { defineCustomElements } from '@ion-phaser/core/loader'

const App = lazy(() => import('./App'))

const root = document.getElementById('app')
if (root !== null) {
  ReactDOM.render(<Suspense fallback={null}>{React.createElement(App)}</Suspense>, root)
}

// defineCustomElements(window)
