var unit = prompt('Введіть одиницю вимірювання (км, г, кг)');
var count = prompt('Введіть кількість:');

switch (unit) {
    case 'км':
        alert(count * 1000 + 'м.');
        break;
    case 'г':
        alert(count * 60 + 'хв.');
        break;
    case 'кг':
        alert(count * 1000 + 'грм.');
        break;
    default:
        alert('Невірна одиниця вимірювання. Введіть км, год або кг.')
}