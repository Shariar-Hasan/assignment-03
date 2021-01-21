// https://github.com/Shariar-Hasan/assignment-03



//function for converting kilometer to meter 
function kilometerToMeter(kilo) {
    if (kilo >= 0) {
        return kilo * 1000;
    }
    else {
        return "Warning! wrong input";
    }
}



// function for calculating budget
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50, phonePrice = 100, laptopPrice = 500;
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        return (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
    }
    else {
        return "Warning! wrong input";
    }
}



// function for calculating hotel cost
function hotelCost(day) {
    switch (true) {
        case day > 20:
            return 1800 + (day - 20) * 50;
            break;

        case day > 10 && day <= 20:
            return 1000 + (day - 10) * 80;
            break;

        case day >= 0 && day <= 10:
            return day * 100;
            break;

        default:
            return "Warning! wrong input";
    }
}



// function for finding the longest names
function megaFriend(friendNames) {
    var megaName = friendNames[0].length, megaIndex = 0;

    for (var i = 0; i < friendNames.length; i++) {
        if (friendNames[i].length > megaName) {
            megaName = friendNames[i].length;
            megaIndex = i;
        }
    }
    return friendNames[megaIndex];
}