function onLoad() {
    let today = new Date();								//To get Current date
    let todayStr = today.toJSON().substring(0, 10);		//To convert date into string type

    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);				//To increase the maximum date after current date for user to select is 5 days
    let endDateStr = endDate.toJSON().substring(0, 10);  //TO convert the maximum date into string
    document.querySelector("#jdate").setAttribute("value", todayStr);		//To set default date for user as current date
    document.querySelector("#jdate").setAttribute("min", todayStr);			//To select minimum date for user
    document.querySelector("#jdate").setAttribute("max", endDateStr);		//To select maximum date for user

}