# Articulate Developer Challenge

This app is my version of the "Knowledge Check Block"

## Get Started

* Pull down the code:

  `git clone git@github.com:stefholbrook/articulate-dev.git`
* Get it running

  `npm start`
* Visit `localhost:3000`

## Context

Where do they live and when/how should we (not) use them?

## Decision

* Styled components are the final home for styles
* Inline styles are good for exploratory styling
* Organization
  * In the file next door rather than index
  * Name the file components/styled.js or components/styled/{component-name}.js in our current page based organization
* Importing:
  ```javascript
  import { Thing } from 'styled-things.js'

  <Thing />
  ```


## Consequences

Consistency in how styled components are organized and used.
