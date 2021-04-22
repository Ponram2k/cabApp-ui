function calculateGst(amount,gst){
    let val = gst/100;
    amount = amount + (amount * val);
    return amount;
}