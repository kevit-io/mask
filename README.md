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
    "ssn": "123-45-6789",
    "creditCard": "1234-5678-9876-5432",
    "driversLicense": "A1234567",
    "bankAccount": "1234567890123456",
    "iban": "GB82WEST12345698765432",
    "tin": "987-65-4321",
    "healthInsuranceNumber": "H123456789",
    "employeeId": "EMP12345"
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
*  pincode: '3XXX1',
*  ssn: 'XXX-XX-XXXX',
*  creditCard: '1234-XXXX-XXXX-5432',
*  driversLicense: 'AXXXXXXX',
*  bankAccount: '123XXXXXXXXX3456',
*  iban: 'GB82XXXXXXXXXXXXXX65432',
*  tin: 'XXX-XX-XXXX',
*  healthInsuranceNumber: 'HXXXXXXXXX',
*  employeeId: 'EMPXXXXX'
* }
*/
```

Example with String Data: 
```ts
import { getUpdateLogData } from '@kevit/mask';
const data = `This is a multi-line string containing the following values:
    name: John Doe  
    email: abc@xyc.com
    mobile: 9833316908
    aadhar: 123456789012
    dob: 01/01/1990
    pancard: ABBPG6789L
    passportNumber: A2190457
    pincode: 360001
    ssn: 123-45-6789
    creditCard: 1234-5678-9876-5432
    driversLicense: A1234567
    bankAccount: 1234567890123456
    iban: GB82WEST12345698765432
    tin: 987-65-4321
    healthInsuranceNumber: H123456789
    employeeId: EMP12345
`

const result = getUpdateLogData(data);
console.log(result)

/**
 * Output:
 *  This is a multi-line string containing the following values:
 *  name: John Doe  
 *  email: XXXXXX@XXX.XX
 *  mobile: 9833XXXX08
 *  aadhar: XXXXXXXX9012
 *  dob: XX/XX/XXXX
 *  pancard: AXXXXXXX9L
 *  passportNumber: A2XXX57
 *  pincode: 3XXX1
 *  ssn: XXX-XX-XXXX
 *  creditCard: 1234-XXXX-XXXX-5432
 *  driversLicense: AXXXXXXX
 *  bankAccount: 123XXXXXXXXX3456
 *  iban: GB82XXXXXXXXXXXXXX65432
 *  tin: XXX-XX-XXXX
 *  healthInsuranceNumber: HXXXXXXXXX
 *  employeeId: EMPXXXXX
 */
```

## The functions we are providing ##

| Function Name | Description |
|---|---|
| updateMaskedAdharaCardNumber | This function will mask the Aadhaar card number details |
| updateMaskedDob | This function will mask the date of birth of the user |
| updateMaskedEmailId | This function will mask the email address of the user |
| updateMaskedMobileNumber | This function will mask the mobile number of the user |
| updateMaskedPanCard | This function will mask the PAN card number |
| updateMaskedPassportNumber | This function will mask the passport number of the user |
| updateMaskedPinCode | This function will mask the pin code of the user |
| updateMaskedSSN | This function will mask Social Security Numbers (SSN) |
| updateMaskedCreditCard | This function will mask Credit Card Numbers |
| updateMaskedDriversLicense | This function will mask Driver's License Numbers |
| updateMaskedBankAccount | This function will mask Bank Account Numbers |
| updateMaskedIBAN | This function will mask International Bank Account Numbers (IBAN) |
| updateMaskedTIN | This function will mask Tax Identification Numbers (TIN) |
| updateMaskedHealthInsuranceNumber | This function will mask Health Insurance Numbers |
| updateMaskedEmployeeID | This function will mask Employee IDs |
| getUpdateLogData | This function will mask all the details of the user mentioned in the above table |