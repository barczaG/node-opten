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
