var unit = 'км';
var count =5;

switch (unit) {
    case 'км':
        console.log(count * 1000 + 'м.');
        break;
    case 'г':
        console.log(count * 60 + 'хв.');
        break;
    case 'кг':
        console.log(count * 1000 + 'грм.');
        break;
    default:
        console.log('Приймаються тількі кілометри,години,та кілограми у вугляді км/г/кг')
}