function peakHour(hr){
    if(hr >= 15 && hr<=17){
        return true;
    }
    return false;
}

function peakHourAmount(amount,percentage){
    let pkamount = percentage / 100;
    pkamount = amount + (amount * pkamount);
    return pkamount;
}