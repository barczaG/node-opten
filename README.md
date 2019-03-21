
![npm](https://img.shields.io/npm/v/opten.svg)
[![Build Status](https://travis-ci.org/barczag/node-opten.svg?branch=master)](https://travis-ci.org/barczag/node-opten)
[![codecov](https://codecov.io/gh/barczag/node-opten/branch/master/graph/badge.svg)](https://codecov.io/gh/barczag/node-opten)
[![CodeFactor](https://www.codefactor.io/repository/github/barczag/node-opten/badge)](https://www.codefactor.io/repository/github/barczag/node-opten)
![NPM License](https://img.shields.io/npm/l/opten.svg)

```
const Opten = require('opten').Opten
const opten = new Opten({
  username: 'user',
  password: 'pass'
})

const ret = await opten.rapidSearch('Opten')
```

Outputs

```
[
  {
    "name": "OPTEN Informatikai Korlátolt Felelősségű Társaság",
    "address": {
      "zip": "1147",
      "city": "Budapest",
      "street": "Telepes utca 4."
    },
    "regNumber": "01 09 367756",
    "shortTaxNumber": "12012187"
  },
  {
    "name": "OpTen Energiagazdálkodási és Számítástechnikai Betéti Társaság",
    "address": {
      "zip": "1157",
      "city": "Budapest",
      "street": "Kőrakás park 42."
    },
    "regNumber": "01 06 111627",
    "shortTaxNumber": "28197355"
  }
]
```
