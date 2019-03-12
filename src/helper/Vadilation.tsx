export const validateUserName = (username) => {
    var va = /^[^)!@#$%^&*(]*$/;
    return va.test(username)
}

export const validateEmail = (email) => {
    var va = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]$/;
    return va.test(email)
}

export const validatePhoneNumber = (phoneNumber) => {
    var va = /^[(0|84|\+84)]+[0-9]*$/;
    return va.test(phoneNumber)
}

export const validateAddress = (address) => {
    var va = /^[^)!@#$%^&*(]*$/;
    return va.test(address)
}