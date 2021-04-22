function cabAmnt(typ,km){
    let amnt = 0 ;
    switch(typ){
        case "Micro":
            amnt = km * 10;
            return amnt;
        case "Mini":
            amnt = km * 15;
            return amnt;
        case "Prime":
            amnt = km * 20;
            return amnt;
        default:
            return 0;
    }
}