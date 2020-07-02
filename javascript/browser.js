window
  window.alert(message)
  window.confirm(message)
  window.history
    window.history.go(position)
    window.history.length
  window.innerHeight
  window.innerWidth
  window.location
    window.location.hostname
    window.location.href
    window.location.port
    window.location.reload()
    window.location.search
  window.navigator
    window.navigator.appName
    window.navigator.appVersion
    window.navigator.language
    window.navigator.platform
    window.navigator.userAgent
    window.navigator.vendor
  window.outerHeight
  window.outerWidth
  window.prompt(message)
  window.scrollX
  window.scrollY

document
  // Methods
  document.createElement(tagName)
  document.createTextNode(text)
  // Properties
  document.contentType
  document.characterSet
  document.doctype
  document.domain
  document.URL
  // Selectors
  document.all
  document.body
  document.forms
  document.getElementById(id)
  document.getElementsByClassName(className)
  document.getElementsByTagName(tagName)
  document.head
  document.images
  document.links
  document.querySelector(cssSelector)
  document.querySelectorAll(cssSelector)
  document.scripts

HTMLElement.prototype
  // Methods
  HTMLElement.prototype.addEventListener(eventType, handlerFunction)
  HTMLElement.prototype.appendChild(node)
  HTMLElement.prototype.getAttribute(attributeName)
  HTMLElement.prototype.hasAttribute(attributeName)
  HTMLElement.prototype.insertAdjacentElement(position, element)
  HTMLElement.prototype.insertBefore(newNode, childNode)
  HTMLElement.prototype.remove()
  HTMLElement.prototype.removeAttribute(attributeName)
  HTMLElement.prototype.removeChild(node)
  HTMLElement.prototype.replaceChild(newNode, oldNode)
  HTMLElement.prototype.setAttribute(attributeName, value)
  // Properties
  HTMLElement.prototype.childElementCount
  HTMLElement.prototype.classList
    HTMLElement.prototype.classList.add(className)
    HTMLElement.prototype.classList.contains(className)
    HTMLElement.prototype.classList.remove(className)
  HTMLElement.prototype.className
  HTMLElement.prototype.dataset
  HTMLElement.prototype.innerHTML
  HTMLElement.prototype.innerText
  HTMLElement.prototype.nodeName
  HTMLElement.prototype.nodeType
  HTMLElement.prototype.style
  HTMLElement.prototype.textContent
  // Selectors
  HTMLElement.prototype.getElementById(id)
  HTMLElement.prototype.getElementsByClassName()
  HTMLElement.prototype.getElementsByTagName()
  HTMLElement.prototype.querySelector(cssSelector)
  HTMLElement.prototype.querySelectorAll(cssSelector)
  // Traversing
  HTMLElement.prototype.childNodes
  HTMLElement.prototype.children
  HTMLElement.prototype.firstChild
  HTMLElement.prototype.firstElementChild
  HTMLElement.prototype.lastChild
  HTMLElement.prototype.lastElementChild
  HTMLElement.prototype.nextElementSibling
  HTMLElement.prototype.nextSibling
  HTMLElement.prototype.parentElement
  HTMLElement.prototype.parentNode
  HTMLElement.prototype.previousElementSibling
  HTMLElement.prototype.previousSibling

Event.prototype
  Event.prototype.clientX
  Event.prototype.clientY
  Event.prototype.keyCode
  Event.prototype.offsetX
  Event.prototype.offsetY
  Event.prototype.target
  Event.prototype.timeStamp
  Event.prototype.type
  Event.prototype.which
    // Mouse
    'click'
    'dblclick'
    'mousedown'
    'mouseenter'
    'mouseleave'
    'mousemove'
    'mouseout'
    'mouseover'
    'mouseup'
    // Keyboard & Form
    'blur'
    'change'
    'cut'
    'focus'
    'input'
    'keydown'
    'keypress'
    'keyup'
    'paste'
    'submit'
    // Others
    'DOMContentLoaded'

XMLHttpRequest.prototype
  XMLHttpRequest.prototype.onerror
  XMLHttpRequest.prototype.onload
  XMLHttpRequest.prototype.onprogress
  XMLHttpRequest.prototype.onreadystatechange
  XMLHttpRequest.prototype.open(method, url, isAsync)
  XMLHttpRequest.prototype.readyState
  XMLHttpRequest.prototype.responseText
  XMLHttpRequest.prototype.send([data[JSON]])
  XMLHttpRequest.prototype.setRequestHeader(headerName, value)
  XMLHttpRequest.prototype.status

localStorage/sessionStorage
  localStorage/sessionStorage.clear()
  localStorage/sessionStorage.getItem(stringKey)
  localStorage/sessionStorage.removeItem(stringKey)
  localStorage/sessionStorage.setItem(stringKey, stringValue)
