/* Flags */
g; // global/more than one match
i; // case insensitive

/* Metacharacters */
/^a/; // Starts with `a`
/a$/; // Ends with `a`
/^a$/; // Only contains `a`
/a./; // Any one character after `a`
/a*/; // 0 or more number of `a`(s)
/a+/; // 1 or more number of `a`(s)
/a?/; // `a` is optional
/\?/; // Escape the `?`

// Character Sets
/[ab]/; // Either `a` or `b`
/[^ab]/; // Anything except `a` or `b`
/[a-zA-Z]/; // Any alphabet
/a{10}/; // `a` 10 times (Quantifying)
/a{10,20}/; // `a` 10-20 times
/a{10,}/; // `a` 10 or more times
/(0x){10}/; // `0x` 10 times (Grouping)

// Shorthand Character Classes
/\w/; // Alphanumeric character (Word)
/\W/; // Not alphanumeric character
/\d/; // Digit character
/\D/; // Not digit character
/\s/; // Whitespace character
/\S/; // Not whitespace character
/a\b/; // Only accepts `a` if it's a single word (Word Boundary)

// Assertions
/a(?=b)/; // Only matcher `a` if followed by a `b`
/a(?!b)/; // Only matches `a` if not followed by a `b`

RegExp.prototype
  RegExp.prototype.exec(stringToSearch) // -> Array || null
  RegExp.prototype.source // -> String
  RegExp.prototype.test(stringToSearch) // -> Boolean

String.prototype
  String.prototype.search(regExpToSearch) // -> Number
  String.prototype.match(regExpToMatch) // -> Array || null
  String.prototype.replace(regExpToFind, stringToReplace) // -> String
