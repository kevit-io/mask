@kevit/mask
-----------

## Description
This is a small utility which can help you mask the sensitive information
from logs or databases or practically from anywhere. 

It exposes a simple function which accepts JSON or string type data and it
replaces sensitive data with masked data. 

This can be used inside various hooks such as Mongoose hooks or express 
middlewares, in frontend before rendering data or before sending data
back to backend etc.

## Usage
Example with JSON data: 
```ts

const data = {
    "name": "John Doe",
    "email": "abc@xyc.com",
    "mobile": "9833316908",
    "aadhar": "123456789012",
    "dob": "01/01/1990",
    "pancard": "ABBPG6789L",
    "passportNumber": "A2190457",
    "pincode": "360001",
}

const result = getUpdateLogData(data);
console.log(result)

/* Output
* {
*  name: 'John Doe',
*  email: 'XXXXXX@XXX.XX',
*  mobile: '9833XXXX08',
*  aadhar: 'XXXXXXXX9012',
*  dob: 'XX/XX/XXXX',
*  pancard: 'AXXXXXXXXL',
*  passportNumber: 'A2XXX57',
*  pincode: '3XXX1'
* }
*/
```

Example with String Data: 
```ts
import { getUpdateLogData } from '@kevit/mask';
const data = ` This is a multi line string containing following values:
    name: John Doe  
    email: abc@xyc.com
    mobile: 9833316908
    aadhar: 123456789012
    dob: 01/01/1990
    pancard: ABBPG6789L
    passportNumber: A2190457
    pincode: 360001
`

const result = getUpdateLogData(data);
console.log(result)

/**
 * Output:
 *  This is a multi line string containing following values:
    name: John Doe  
    email: XXXXXX@XXX.XX
    mobile: 9833XXXX08
    aadhar: XXXXXXXX9012
    dob: XX/XX/XXXX
    pancard: 'AXXXXXXXXL',
    passportNumber: 'A2XXX57',
    pincode: '3XXX1'
 */
```