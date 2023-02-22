const updateMaskedMobileNumber = (data: any) => {
    let start = 0;
    while (start != data.length) {
        if (/^[0]?[6789]\d{9}$/.test(data.slice(start, start + 10))) {
            data = data.slice(0, start + 4) + 'XXXX' + data.slice(start + 8, data.length)
        }
        start += 1
    }
    return data
}

const updateMaskedEmailId = (data: any) => {
    data = data.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, "XXXXXX@XXX.XX");
    return data
}

const updateMaskedPanCard = (data: any) => {
    let start = 0;
    while (start != data.length) {
        const testData = data.slice(start, start + 10) ? data.slice(start, start + 10).toUpperCase() : ''
        if (/^[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/.test(testData)) {
            data = data.slice(0, start + 1) + 'XXXXXXXX' + data.slice(start + 9, data.length)
        }
        start += 1
    }
    return data
}

const updateMaskedDob = (data: any) => {
    let start = 0;
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

const updateMaskedPassportNumber = (data: any) => {
    let start = 0;
    while (start != data.length) {
        const testData = data.slice(start, start + 8) ? data.slice(start, start + 8).toUpperCase() : ''
        if (/^[A-PR-WY][0-9]{7}$/.test(testData)) {
            data = data.slice(0, start + 1) + 'XXXXXX' + data.slice(start + 7, data.length)
        }
        start += 1
    }
    return data
}

const updateMaskedAdharaCardNumber = (data: any) => {
    let start = 0;
    while (start != data.length) {
        if (/^[0-9]{12}$/.test(data.slice(start, start + 12))) {
            data = data.slice(0, start + 0) + 'XXXXXXXX' + data.slice(start + 8, data.length)
        }
        start += 1
    }
    return data
}

const updateMaskedPinCode = (data: any) => {
    let start = 0;
    while (start != data.length) {
        if (/^[1-9][0-9]{5}$/.test(data.slice(start, start + 6))) {
            data = data.slice(0, start + 1) + 'XXX' + data.slice(start + 5, data.length)
        }
        start += 1
    }
    return data
}

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
            return data;
        default:
            return data;
    }
}

