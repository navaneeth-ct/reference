console
  console.clear()
  console.error(value)
  console.log(value)
  console.table(value)
  console.time(label)
  console.timeEnd(label)
  console.warn(value)

// Constructors
new Array(...values)
new Date([date])
new Error(message)
new Function(...stringParameters, stringFunctionDefinition)
new Map()
new Number(value)
new Object(value)
new Promise(executorFunction)
new ReferenceError(message)
new RegExp(escapedStringRegularExpression)
new Set([arrayOfValues])
new String(value)
new SyntaxError(message)
new TypeError(message)
new URIError(message)

// Functions
decodeURIComponent(stringURI)
eval(stringJavaScriptCode)
fetch(url, requestProperties)
isFinite(number)
isNaN(number)
Number(value)
parseFloat(string)
parseInt(string)
require('./modulePath');
setTimeout(callback, delay)
String(value)
Symbol(identifier)

// Operators
export const value
export default value
for (let key in object) // Returns the keys
for (let value of array/set) // Returns the values
for (let [key, value] of map) // Returns the key-value pair arrays
import defaultExport from './modulePath'
import {notDefaultExportsDestructured} from './modulePath'
import * as moduleName from './modulePath'
value instanceof Class
typeof value

Array
  Array.from(iterableObject)
  Array.isArray(value)

Math
  Math.abs(number)
  Math.ceil(number)
  Math.E
  Math.floor(number)
  Math.max(...numbers)
  Math.min(...numbers)
  Math.PI
  Math.pow(number, power)
  Math.random()
  Math.round(number)
  Math.sqrt(number)

Array.prototype
  Array.prototype.concat(...values)
  Array.prototype.filter(callback)
  Array.prototype.find(conditionFunction)
  Array.prototype.forEach(callback)
  Array.prototype.indexOf(value)
  Array.prototype.length
  Array.prototype.map(callback)
  Array.prototype.pop()
  Array.prototype.push(...values)
  Array.prototype.reverse();
  Array.prototype.shift()
  Array.prototype.sort([compareFunction])
  Array.prototype.splice(startIndex, [deleteCount], [...insertValues])
  Array.prototype.unshift(...values)

Object
  Object.create(prototypeObject, propertiesObject)

Object.prototype
  Object.prototype.hasOwnProperty(propertyName)

Date
  Date.now()

Date.prototype 
  Date.prototype.getDate()/getUTCDate()
  Date.prototype.getDay()/getUTCDay()
  Date.prototype.getFullYear()/getUTCFullYear()
  Date.prototype.getHours()/getUTCHours()
  Date.prototype.getMilliseconds()/getUTCMilliseconds()
  Date.prototype.getMinutes()/getUTCMinutes()
  Date.prototype.getMonth()/getUTCMonth()
  Date.prototype.getSeconds()/getUTCSeconds()
  Date.prototype.getTime()
  Date.prototype.setDate(day)
  Date.prototype.setFullYear(year)
  Date.prototype.setHours(hours)
  Date.prototype.setMilliseconds(milliseconds)
  Date.prototype.setMinutes(minutes)
  Date.prototype.setMonth(month)
  Date.prototype.setSeconds(seconds)
  Date.prototype.setTime(timestamp)

Number.prototype
  Number.prototype.toFixed(digits)

String.prototype
  String.prototype.charAt(index)
  String.prototype.concat(...strings)
  String.prototype.includes(substring)
  String.prototype.indexOf(substring)
  String.prototype.lastIndexOf(substring)
  String.prototype.length
  String.prototype.replace(substring, anotherString)
  String.prototype.slice(startIndex, [endIndex])
  String.prototype.split(seperatorString)
  String.prototype.substring(startIndex, [endIndex])
  String.prototype.toLowerCase()
  String.prototype.toUpperCase()

Promise
  Promise.reject(value)
  Promise.resolve(value)

Promise.prototype
  Promise.prototype.catch(functionOnRejected)
  Promise.prototype.then(functionOnFulfilled)

Response.prototype
  Response.prototype.json()
  Response.prototype.text()  

JSON
  JSON.parse(jsonString)
  JSON.stringify(value)

Error.prototype
  Error.prototype.message
  Error.prototype.name

Function.prototype
  Function.prototype.call(thisObject, ...arguments);
  Function.prototype.name

value
  value.toString()

module
  module.exports

Map.prototype
  Map.prototype.forEach(callback)
  Map.prototype.get(key)
  Map.prototype.keys()
  Map.prototype.set(key, value)
  Map.prototype.size
  Map.prototype.values()

Set.prototype
  Set.prototype.add(value)
  Set.prototype.delete(value)
  Set.prototype.entries()
  Set.prototype.forEach(callback)
  Set.prototype.has(value)
  Set.prototype.keys()
  Set.prototype.size
  Set.prototype.values()
