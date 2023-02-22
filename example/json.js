const getUpdateLogData = require('../lib').getUpdateLogData;
const data = {
    "name": "John Doe",
    "email": "abc@xyc.com",
    "mobile": "1234567890",
    "aadhar": "123456789012",
    "dob": "01/01/1990",
}

const result = getUpdateLogData(data);
console.log(result)

/* Output
* {
*  name: 'John Doe',
*  email: 'XXXXXX@XXX.XX',
*  mobile: '1XXX67890',
*  aadhar: 'XXXXXXXX9012',
*  dob: 'XX/XX/XXXX'
* }
*/