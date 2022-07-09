// creating our ouwn module


module.exports.get_Date = getDate; // exporting the getDate function as get_Date

// function to get the date as (Dayoftheweek, Month Date)
function getDate() {
    let today = new Date(); // creating an object of the built-in constructor function Date()

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options); // .toLocaleDateString() method Converts a date to a string by using the current or specified locale.
    return day;
};



// module.exports can be replaced by just exports
exports.get_Day = getDay; // exporting the getDay function as get_Day

// function to get the date as just the day of the week
function getDay() {
    let today = new Date(); // creating an object of the built-in constructor function Date()

    let options = {
        weekday: "long"
    };

    let day = today.toLocaleDateString("en-US", options); // .toLocaleDateString() method Converts a date to a string by using the current or specified locale.
    return day;
};