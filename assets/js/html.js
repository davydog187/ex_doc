// Dependencies
// ------------
import $ from 'jquery'
import Handlebars from 'handlebars/runtime'

import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import diff from 'highlight.js/lib/languages/diff'
import erlang from 'highlight.js/lib/languages/erlang'
import erlangRepl from 'highlight.js/lib/languages/erlang-repl'
import http from 'highlight.js/lib/languages/http'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import markdown from 'highlight.js/lib/languages/markdown'
import sql from 'highlight.js/lib/languages/sql'
import xml from 'highlight.js/lib/languages/xml'

import isArray from './template-helpers/isArray'
import isLocal from './template-helpers/isLocal'
import isNonEmptyArray from './template-helpers/isNonEmptyArray'
import groupChanged from './template-helpers/groupChanged'
import nestingChanged from './template-helpers/nestingChanged'
import showSummary from './template-helpers/showSummary'

import {initialize as initEvents} from './components/events'
import {initialize as initSidebar} from './components/sidebar'
import {initialize as initVersions} from './components/versions'
import {initialize as initNightMode} from './components/night'
import {initialize as initMakeup} from './components/makeup'
import {initialize as initKeyboardShortcuts} from './components/keyboard-shortcuts'
import {initialize as initQuickSwitch} from './components/quick-switch'
import {initialize as initTooltips} from './tooltips/tooltips'
import {initialize as initHintsPage} from './tooltips/hints-page'

window.$ = $

$(() => {
  // Set up Handlebars.js
  Handlebars.registerHelper('isArray', isArray)
  Handlebars.registerHelper('isLocal', isLocal)
  Handlebars.registerHelper('isNonEmptyArray', isNonEmptyArray)
  Handlebars.registerHelper('groupChanged', groupChanged)
  Handlebars.registerHelper('nestingChanged', nestingChanged)
  Handlebars.registerHelper('showSummary', showSummary)

  // Set up Highlight.js
  hljs.configure({
    tabReplace: '    ', // 4 spaces
    languages: [] // disable auto-detect
  })
  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('diff', diff)
  hljs.registerLanguage('erlang', erlang)
  hljs.registerLanguage('erlang-repl', erlangRepl)
  hljs.registerLanguage('http', http)
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('json', json)
  hljs.registerLanguage('markdown', markdown)
  hljs.registerLanguage('sql', sql)
  hljs.registerLanguage('xml', xml)

  initNightMode()
  initSidebar()
  initVersions()
  initEvents()
  initMakeup()
  initKeyboardShortcuts()
  initQuickSwitch()
  initTooltips()
  initHintsPage()

  hljs.initHighlighting()
})
