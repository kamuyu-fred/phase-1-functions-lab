// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
someValue > 0;
if (someValue >= 42) {
    return someValue - 42;
    }
    else if (someValue < 42) {
        return 42 - someValue;
    }
}
distanceFromHqInBlocks(someValue);

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

distanceFromHqInFeet(someValue);


function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else if (start < destination) {
        return (destination - start) * 264;
    }
}

distanceTravelledInFeet(start, destination);

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return 0.02 * (distanceTravelledInFeet(start, destination)-400);
    } 
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }  
}
calculatesFarePrice(start, destination);