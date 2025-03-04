function validateEmail(email) {

    // UC1 - Initial regex
    const pattern = /^abc/;  
    return pattern.test(email);
}

// Test cases
console.log(validateEmail("abc")); // true (UC1)
console.log(validateEmail("xyz")); // false
