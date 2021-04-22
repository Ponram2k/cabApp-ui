function isSeniorCitizen(year) {
    let d = new Date();
    let y = parseInt(d.getFullYear().toString());
    let age = y - year;
    if(age>60){
        return true;
    }
    return false;
}

function getSeniorCitizenAmount(amount){
    return amount / 2;
}