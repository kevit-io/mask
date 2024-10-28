/**
 * Masks the SSN (Social Security Number) in the given data.
 * For object data, it converts it to a JSON string and replaces any SSN
 * that matches the pattern XXX-XX-XXXX with 'XXX-XX-XXXX'.
 * For string data, it directly replaces any SSN that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with SSNs masked.
 */
export const updateMaskedSSN = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^\d{3}-\d{2}-\d{4}$/.test(data.slice(start, start + 11))) {
                    data = data.slice(0, start) + 'XXX-XX-XXXX' + data.slice(start + 11, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^\d{3}-\d{2}-\d{4}$/.test(data.slice(start, start + 11))) {
                    data = data.slice(0, start) + 'XXX-XX-XXXX' + data.slice(start + 11, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the credit card number in the given data.
 * For object data, it converts it to a JSON string and replaces any credit
 * card number that matches the pattern XXXX-XXXX-XXXX-XXXX with
 * 'XXXX-XXXX-XXXX-XXXX'.
 * For string data, it directly replaces any credit card number that matches
 * the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with credit card numbers masked.
 */
export const updateMaskedCreditCard = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(data.slice(start, start + 19))) {
                    data = data.slice(0, start + 4) + 'XXXX-XXXX-XXXX' + data.slice(start + 16, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(data.slice(start, start + 19))) {
                    data = data.slice(0, start + 4) + 'XXXX-XXXX-XXXX' + data.slice(start + 16, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the driver's license number in the given data.
 * For object data, it converts it to a JSON string and replaces any driver's
 * license number that matches the pattern AXXXXXXX with 'AXXXXXXX'.
 * For string data, it directly replaces any driver's license number that matches
 * the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with driver's license numbers masked.
 */
export const updateMaskedDriversLicense = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^[A-Z]\d{7}$/.test(data.slice(start, start + 8))) {
                    data = data.slice(0, start + 1) + 'XXXXXXX' + data.slice(start + 7, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^[A-Z]\d{7}$/.test(data.slice(start, start + 8))) {
                    data = data.slice(0, start + 1) + 'XXXXXXX' + data.slice(start + 7, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the bank account number in the given data.
 * For object data, it converts it to a JSON string and replaces any bank
 * account number that matches the pattern XXXXXXXXXXXX with
 * 'XXXXXXXXXXX'.
 * For string data, it directly replaces any bank account number that matches
 * the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with bank account numbers masked.
 */
export const updateMaskedBankAccount = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^\d{9,18}$/.test(data.slice(start, start + 18))) {
                    data = data.slice(0, start + 3) + 'XXXXXXXXX' + data.slice(start + 12, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^\d{9,18}$/.test(data.slice(start, start + 18))) {
                    data = data.slice(0, start + 3) + 'XXXXXXXXX' + data.slice(start + 12, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the International Bank Account Number (IBAN) in the given data.
 * For object data, it converts it to a JSON string and replaces any IBAN that
 * matches the pattern [A-Z]{2}\d{2}[A-Z0-9]{1,30} with
 * 'XXXXXXXXXXXXXXXXXXXXXX'.
 * For string data, it directly replaces any IBAN that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with IBANs masked.
 */
export const updateMaskedIBAN = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(data.slice(start, start + 34))) {
                    data = data.slice(0, start + 4) + 'XXXXXXXXXXXXXXXXXXXXXX' + data.slice(start + 24, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(data.slice(start, start + 34))) {
                    data = data.slice(0, start + 4) + 'XXXXXXXXXXXXXXXXXXXXXX' + data.slice(start + 24, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the Taxpayer Identification Number (TIN) in the given data.
 * For object data, it converts it to a JSON string and replaces any TIN that
 * matches the pattern XXX-XX-XXXX with 'XXX-XX-XXXX'.
 * For string data, it directly replaces any TIN that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with TINs masked.
 */
export const updateMaskedTIN = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^\d{3}-\d{2}-\d{4}$/.test(data.slice(start, start + 11))) {
                    data = data.slice(0, start) + 'XXX-XX-XXXX' + data.slice(start + 11, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^\d{3}-\d{2}-\d{4}$/.test(data.slice(start, start + 11))) {
                    data = data.slice(0, start) + 'XXX-XX-XXXX' + data.slice(start + 11, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the health insurance number in the given data.
 * For object data, it converts it to a JSON string and replaces any health
 * insurance number that matches the pattern AXXXXXXXXX with 'AXXXXXXXXX'.
 * For string data, it directly replaces any health insurance number that matches
 * the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with health insurance numbers masked.
 */
export const updateMaskedHealthInsuranceNumber = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^[A-Z]{1}\d{9}$/.test(data.slice(start, start + 10))) {
                    data = data.slice(0, start + 1) + 'XXXXXXXXX' + data.slice(start + 10, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^[A-Z]{1}\d{9}$/.test(data.slice(start, start + 10))) {
                    data = data.slice(0, start + 1) + 'XXXXXXXXX' + data.slice(start + 10, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the employee ID in the given data.
 * For object data, it converts it to a JSON string and replaces any employee
 * ID that matches the pattern [A-Z]{2,4}[0-9]{3,5} with 'XXXXX'.
 * For string data, it directly replaces any employee ID that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with employee IDs masked.
 */
export const updateMaskedEmployeeID = (data: any) => {
    let start = 0;
    const type = typeof data;
    switch (type) {
        case 'object':
            data = JSON.stringify(data);
            while (start != data.length) {
                if (/^[A-Z]{2,4}\d{3,5}$/.test(data.slice(start, start + 8))) {
                    data = data.slice(0, start + 4) + 'XXXXX' + data.slice(start + 7, data.length);
                }
                start += 1;
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^[A-Z]{2,4}\d{3,5}$/.test(data.slice(start, start + 8))) {
                    data = data.slice(0, start + 4) + 'XXXXX' + data.slice(start + 7, data.length);
                }
                start += 1;
            }
            return data;
    }
}

/**
 * Masks the mobile number in the given data.
 * For object data, it converts it to a JSON string and replaces any mobile
 * number that matches the pattern [0]?[6789]\d{9} with 'XXXX'.
 * For string data, it directly replaces any mobile number that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with mobile numbers masked.
 */
export const updateMaskedMobileNumber = (data: any) => {
    let start = 0;
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            while (start != data.length) {
                if (/^[0]?[6789]\d{9}$/.test(data.slice(start, start + 10))) {
                    data = data.slice(0, start + 4) + 'XXXX' + data.slice(start + 8, data.length)
                }
                start += 1
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^[0]?[6789]\d{9}$/.test(data.slice(start, start + 10))) {
                    data = data.slice(0, start + 4) + 'XXXX' + data.slice(start + 8, data.length)
                }
                start += 1
            }
            return data;
    }
}

/**
 * Masks the email address in the given data.
 * For object data, it converts it to a JSON string and replaces any email
 * address that matches the pattern [a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+
 * with 'XXXXXX@XXX.XX'.
 * For string data, it directly replaces any email address that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with email addresses masked.
 */
export const updateMaskedEmailId = (data: any) => {
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            data = data.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, "XXXXXX@XXX.XX");
            return JSON.parse(data);
        case 'string':
            data = data.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, "XXXXXX@XXX.XX");
            return data;
    }
}

/**
 * Masks the PAN (Permanent Account Number) card number in the given data.
 * For object data, it converts it to a JSON string and replaces any PAN card
 * number that matches the pattern [A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}
 * with 'XXXXXXXX'.
 * For string data, it directly replaces any PAN card number that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with PAN card numbers masked.
 */
export const updateMaskedPanCard = (data: any) => {
    let start = 0;
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            while (start != data.length) {
                const testData = data.slice(start, start + 10) ? data.slice(start, start + 10).toUpperCase() : ''
                if (/^[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/.test(testData)) {
                    data = data.slice(0, start + 1) + 'XXXXXXXX' + data.slice(start + 9, data.length)
                }
                start += 1
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                const testData = data.slice(start, start + 10) ? data.slice(start, start + 10).toUpperCase() : ''
                if (/^[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/.test(testData)) {
                    data = data.slice(0, start + 1) + 'XXXXXXXX' + data.slice(start + 9, data.length)
                }
                start += 1
            }
            return data
    }
}

/**
 * Masks the date of birth in the given data.
 * For object data, it converts it to a JSON string and replaces any date of birth
 * that matches the pattern DD/MM/YYYY or YYYY/MM/DD with 'XX/XX/XXXX'.
 * For string data, it directly replaces any date of birth that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with dates of birth masked.
 */
export const updateMaskedDob = (data: any) => {
    let start = 0;
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            while (start != data.length) {
                const testData = data.slice(start, start + 10)
                if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(testData) ||
                    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(testData)) {
                    data = data.slice(0, start) + 'XX/XX/XXXX' + data.slice(start + 10, data.length)
                }
                start += 1
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                const testData = data.slice(start, start + 10)
                if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(testData) ||
                    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(testData)) {
                    data = data.slice(0, start) + 'XX/XX/XXXX' + data.slice(start + 10, data.length)
                }
                start += 1
            }
            return data
    }
}

/**
 * Masks the passport number in the given data.
 * For object data, it converts it to a JSON string and replaces any passport
 * number that matches the pattern [A-PR-WY][0-9]{7} with 'XXXXXX'.
 * For string data, it directly replaces any passport number that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with passport numbers masked.
 */
export const updateMaskedPassportNumber = (data: any) => {
    let start = 0;
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            while (start != data.length) {
                const testData = data.slice(start, start + 8) ? data.slice(start, start + 8).toUpperCase() : ''
                if (/^[A-PR-WY][0-9]{7}$/.test(testData)) {
                    data = data.slice(0, start + 1) + 'XXXXXX' + data.slice(start + 7, data.length)
                }
                start += 1
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                const testData = data.slice(start, start + 8) ? data.slice(start, start + 8).toUpperCase() : ''
                if (/^[A-PR-WY][0-9]{7}$/.test(testData)) {
                    data = data.slice(0, start + 1) + 'XXXXXX' + data.slice(start + 7, data.length)
                }
                start += 1
            }
            return data
    }
}

/**
 * Masks the Aadhaar card number in the given data.
 * For object data, it converts it to a JSON string and replaces any Aadhaar
 * card number that matches the pattern [0-9]{12} with 'XXXXXXXX'.
 * For string data, it directly replaces any Aadhaar card number that matches
 * the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with Aadhaar card numbers masked.
 */
export const updateMaskedAdharaCardNumber = (data: any) => {
    let start = 0;
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            while (start != data.length) {
                if (/^[0-9]{12}$/.test(data.slice(start, start + 12))) {
                    data = data.slice(0, start + 0) + 'XXXXXXXX' + data.slice(start + 8, data.length)
                }
                start += 1
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^[0-9]{12}$/.test(data.slice(start, start + 12))) {
                    data = data.slice(0, start + 0) + 'XXXXXXXX' + data.slice(start + 8, data.length)
                }
                start += 1
            }
            return data
    }
}

/**
 * Masks the pin code in the given data.
 * For object data, it converts it to a JSON string and replaces any pin code
 * that matches the pattern [1-9][0-9]{5} with 'XXX'.
 * For string data, it directly replaces any pin code that matches the pattern.
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with pin codes masked.
 */
export const updateMaskedPinCode = (data: any) => {
    let start = 0;
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            while (start != data.length) {
                if (/^[1-9][0-9]{5}$/.test(data.slice(start, start + 6))) {
                    data = data.slice(0, start + 1) + 'XXX' + data.slice(start + 5, data.length)
                }
                start += 1
            }
            return JSON.parse(data);
        case 'string':
            while (start != data.length) {
                if (/^[1-9][0-9]{5}$/.test(data.slice(start, start + 6))) {
                    data = data.slice(0, start + 1) + 'XXX' + data.slice(start + 5, data.length)
                }
                start += 1
            }
            return data
    }
}

/**
 * Masks sensitive information within the provided data, including Aadhaar card number,
 * mobile number, email address, PAN card number, date of birth, pin code, and passport number.
 * The input data can be either an object or a string.
 * 
 * For object data, it will be converted to a JSON string, processed for masking,
 * and then converted back to an object.
 * 
 * For string data, it will be processed directly.
 * 
 * @param data - The input data, which can be either an object or a string.
 * @returns The data with sensitive information masked. The return type will 
 * mirror the input type (object or string). If the data is neither an object 
 * nor a string, it returns the data as is.
 */
export const getUpdateLogData = (data: any | string): any | string | void => {
    const type = typeof data
    switch (type) {
        case 'object':
            data = JSON.stringify(data)
            if (data.length) {
                data = updateMaskedAdharaCardNumber(data)
                data = updateMaskedMobileNumber(data)
                data = updateMaskedEmailId(data)
                data = updateMaskedPanCard(data)
                data = updateMaskedDob(data)
                data = updateMaskedPinCode(data)
                data = updateMaskedPassportNumber(data)
                data = updateMaskedSSN(data);
                data = updateMaskedCreditCard(data);
                data = updateMaskedDriversLicense(data);
                data = updateMaskedBankAccount(data);
                data = updateMaskedIBAN(data);
                data = updateMaskedTIN(data);
                data = updateMaskedHealthInsuranceNumber(data);
                data = updateMaskedEmployeeID(data);
                return JSON.parse(data);
            }
            break;
        case 'string':
            data = updateMaskedAdharaCardNumber(data)
            data = updateMaskedMobileNumber(data)
            data = updateMaskedEmailId(data)
            data = updateMaskedPanCard(data)
            data = updateMaskedDob(data)
            data = updateMaskedPinCode(data)
            data = updateMaskedPassportNumber(data)
            data = updateMaskedSSN(data);
            data = updateMaskedCreditCard(data);
            data = updateMaskedDriversLicense(data);
            data = updateMaskedBankAccount(data);
            data = updateMaskedIBAN(data);
            data = updateMaskedTIN(data);
            data = updateMaskedHealthInsuranceNumber(data);
            data = updateMaskedEmployeeID(data);
            return data;
        default:
            return data;
    }
}

