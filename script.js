var age = prompt('Скількі тобі років?');
if (age <1 || isNaN(age)) {
    alert('Введіть будь-ласка коректне, додатнє число!!!');
}
else if (age>100){
    alert('В чому твій секрет?');
}
else if(age % 10 === 1 && age % 100 !== 11){
    alert(age + ' рік ');
}
else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)){
    alert(age + ' роки ')
}
else {
    alert(age + ' років ')
}