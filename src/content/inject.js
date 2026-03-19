import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App.jsx'
import shadowStyles from '../index.css?inline'

const HOST_ID = 'mood-discovery-shadow-host'
const ICON_ID = 'mood-discovery-sidebar-icon'

function createOverlayRoot() {
  let host = document.getElementById(HOST_ID)
  if (!host) {
    host = document.createElement('div')
    host.id = HOST_ID
    document.body.appendChild(host)
  }

  host.style.position = 'fixed'
  host.style.inset = '0'
  host.style.zIndex = '2147483647'
  host.style.pointerEvents = 'none'

  const shadowRoot = host.shadowRoot || host.attachShadow({ mode: 'open' })

  if (!shadowRoot.querySelector('style[data-mood-discovery]')) {
    const styleTag = document.createElement('style')
    styleTag.setAttribute('data-mood-discovery', 'true')
    styleTag.textContent = `
      ${shadowStyles}
      :host { all: initial; }
      #mood-discovery-app-root { pointer-events: auto; }
    `
    shadowRoot.appendChild(styleTag)
  }

  let appRoot = shadowRoot.getElementById('mood-discovery-app-root')
  if (!appRoot) {
    appRoot = document.createElement('div')
    appRoot.id = 'mood-discovery-app-root'
    shadowRoot.appendChild(appRoot)
  }

  return appRoot
}

function findSidebarContainer() {
  const selectors = [
    '[data-testid="left-sidebar"] nav ul',
    'nav[aria-label="Main"] ul',
    'nav ul',
  ]
  for (const selector of selectors) {
    const node = document.querySelector(selector)
    if (node) return node
  }
  return null
}

function insertSidebarMoodIcon() {
  const sidebarList = findSidebarContainer()
  if (!sidebarList || document.getElementById(ICON_ID)) return false

  const listItem = document.createElement('li')
  listItem.id = ICON_ID
  listItem.style.listStyle = 'none'
  listItem.style.marginTop = '8px'

  const button = document.createElement('button')
  button.type = 'button'
  button.textContent = 'Mood'
  button.style.width = '100%'
  button.style.padding = '8px 12px'
  button.style.borderRadius = '999px'
  button.style.border = '1px solid rgba(255,255,255,0.12)'
  button.style.background = '#1db954'
  button.style.color = '#000'
  button.style.fontWeight = '700'
  button.style.cursor = 'pointer'
  button.style.fontFamily = 'Circular Spotify Text, Circular Std, Segoe UI, sans-serif'
  button.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('mood-discovery:open-overlay'))
  })

  listItem.appendChild(button)
  sidebarList.appendChild(listItem)
  return true
}

function mountReactOverlay() {
  const appRoot = createOverlayRoot()
  const root = createRoot(appRoot)
  root.render(
    React.createElement(StrictMode, null, React.createElement(App, { embedded: true })),
  )
}

function boot() {
  mountReactOverlay()
  insertSidebarMoodIcon()
  window.dispatchEvent(new CustomEvent('mood-discovery:open-overlay'))

  const observer = new MutationObserver(() => {
    insertSidebarMoodIcon()
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}
