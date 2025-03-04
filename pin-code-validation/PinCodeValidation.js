function validatePinCode(pinCode) {
    
    // UC-01 : Regex pattern to validate a 6-digit Indian PIN code
    // UC-02 : Starts with digit 1-9
    // UC-03 : No extra characters (like alphabets or special characters) at the end
    const pinCodePattern = /^[1-9][0-9]{5}$/;

    if (pinCodePattern.test(pinCode)) {
        console.log("Valid PIN code");
    } else {
        console.log("Invalid PIN code");
    }
}

// Example usage
validatePinCode("400088");  
validatePinCode("012345");  
validatePinCode("400088@"); 
validatePinCode("400088 "); 