//hm1
var character = {
    name : "Guts",
    nickname : "Black Swordsman",
    gender : "Male",
    Age : 24 ,
    height : "204cm",
    weight : "115 kg",
    weapon : "Dragon Slayer",

  getInfo: function(){
    for (let i in this ){
        if(typeof this[i] !=='function') {
        console.log(i + ": " + this[i]);}
    }
  }

}
character.getInfo();
character.armor = "Berserker Armor";
character.getInfo();

//hm2

var services = {
  "стрижка": 60,
  "гоління": 80,
  "Миття голови": 100,

  price: function () {
    var total = 0;
    for (var i in this) {
      if (typeof this[i] === 'number') {
        total += this[i];
      }
    }
    return total;
  },

  minPrice: function () {
    var values = Object.values(this).filter(value => typeof value === 'number');
    return Math.min(...values);
  },

  maxPrice: function () {
    var values = Object.values(this).filter(value => typeof value === 'number');
    return Math.max(...values);
  }
};
services['Розбити скло'] = 1000;


var totalPrice = services.price();
var minPrice = services.minPrice();
var maxPrice = services.maxPrice();

console.log("Загальна вартість послуг:", totalPrice + " грн");
console.log("Мінімальна вартість послуг:", minPrice + " грн");
console.log("Максимальна вартість послуг:", maxPrice + " грн");