function tofeet(inches){
    const feet=inches/12;
    return feet;
}

const giveInches =144;
const GetFeet=tofeet(giveInches);
console.log(GetFeet);
