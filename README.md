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

## The functions we are providing ##

| Function Name | Description |
|---|---|
| updateMaskedAdharaCardNumber | This function will mask the aadhaar card number details|
| updateMaskedDob | This function will mask the date of birth of the user|
| updateMaskedEmailId | This function will mask the email address of the user|
| updateMaskedMobileNumber | This function will mask the mobile number of the user|
| updateMaskedPanCard | This function will mask the pan card number|
| updateMaskedPassportNumber | This function will mask the passport number of the user|
| updateMaskedPinCode | This function will mask the pin code of the user|
| getUpdateLogData | This function will mask all the details of the user that we mention in the above table|