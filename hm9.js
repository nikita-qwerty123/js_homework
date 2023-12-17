// hm1 
function myBlend(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
myBlend(arr1);
console.log(arr1);


// hm2
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                            partners: [ 
                                {
                                name: 'Клієнт 1.2.3.1',
                                type: 'subSubCompany',
                                uses: 'Рішення для продажу квитків',
                                sells: 'Рішення для продажу квитків',
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(company, companyName) {
    if (company.name === companyName) {
      return company;
    }
  
    if (company.clients) {
      for (var i = 0; i < company.clients.length; i++) {
        var client = company.clients[i];
        var result = findValueByKey(client, companyName);
        if (result) {
          return result;
        }
      }
    }
  
    if (company.partners) {
      for (var j = 0; j < company.partners.length; j++) {
        var partner = company.partners[j];
        var resultPartner = findValueByKey(partner, companyName);
        if (resultPartner) {
          return resultPartner;
        }
      }
    }
  
    return null; 
  }
  

  var companyInfo = findValueByKey(company, 'Клієнт 1.2.3.1');
  console.log(companyInfo);