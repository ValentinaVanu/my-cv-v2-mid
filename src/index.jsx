import React from 'react'
import { render } from 'react-dom'
import { App } from './component/app'
import './index.css'

const here = document.querySelector('#here')

const app = <App />

render(app, here)
