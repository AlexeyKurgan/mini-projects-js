const users = [
    {
        "_id": "5d220b10e8265cc978e2586b",
        "isActive": true,
        "balance": 2853.33,
        "age": 20,
        "name": "Buckner Osborne",
        "gender": "male",
        "company": "EMPIRICA",
        "email": "bucknerosborne@empirica.com",
        "phone": "+1 (850) 411-2997",
        "registered": "2018-08-13T04:28:45 -03:00",
        "nestedField": { total: 300 }
    },
    {
        "_id": "5d220b10144ef972f6c2b332",
        "isActive": true,
        "balance": 1464.63,
        "age": 38,
        "name": "Rosalie Smith",
        "gender": "female",
        "company": "KATAKANA",
        "email": "rosaliesmith@katakana.com",
        "phone": "+1 (943) 463-2496",
        "registered": "2016-12-09T05:15:34 -02:00",
        "nestedField": { total: 400 }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 2823.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    },
    {
        "_id": "5v224b1781a0994655ideyf7",
        "isActive": false,
        "balance": 6000.59,
        "age": 40,
        "name": "Alex Kurgan",
        "gender": "male",
        "company": "EBIDCO",
        "email": "akurgan@gmail.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    },

];

let listFieldObj = {
    numered: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance',
};

(function (arrOfUsers) {

    // общая сумма
    function totalBalance() {
        let totalBalance = 0;
        arrOfUsers.forEach(user => {
            totalBalance += user.balance;
        });
        return parseFloat(totalBalance.toFixed(2));
    }

    // возвращаем массив обьектов с данными юзера
    function getArrUsersValue(usersValue) {
        let arrValue = [];
        usersValue.forEach(element => {
            let { _id, name, email, balance } = element;
            arrValue.push({ _id, name, email, balance });
        });
        return arrValue;
    }

    // cоздание thead
    function createTableHead(objUsers) {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        let fieldValues = Object.values(objUsers);

        for (let i = 0; i < fieldValues.length; i++) {
            const th = document.createElement('th');
            thead.appendChild(tr);
            tr.appendChild(th)
            tr.style.backgroundColor = '#fc0';
            th.textContent = fieldValues[i];
        }
        return thead;
    }

    // создание tbody
    function createTableBody() {
        const tbody = document.createElement('tbody');
        let fragment = document.createDocumentFragment();
        let arrValues = getArrUsersValue(users);

        for (const key in arrValues) {
            let tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid #DADCE0';
            let values = [];
            values = Object.values(arrValues[key]);

            for (let i = 0; i < values.length; i++) {
                let td = document.createElement('td');
                tr.appendChild(td)
                td.textContent = values[i];
                td.style.padding = '5px'
                fragment.appendChild(tr);
                tbody.appendChild(fragment);
            }
        }
        return tbody;
    }

    // создание tfooter
    function createTableFooter() {
        const tfoot = document.createElement('tfoot');
        const tr = document.createElement('tr');
        let strong = document.createElement('strong');

        for (let i = 1; i <= 4; i++) {
            const td = document.createElement('td');
            tfoot.appendChild(tr);
            tr.appendChild(td);

            if (i == 4) {
                td.appendChild(strong);
                td.textContent = 'Total balance: '
                td.insertAdjacentElement('beforeend', strong);
                strong.textContent = `${totalBalance()}`;
                strong.style.fontWeight = 'bold';
            }
        }
        return tfoot;
    }

    // функция которая возвращает готовую таблицу
    function getAllTable(thead, tbody, tfoot) {
        const container = document.querySelector('.container-table');
        const table = document.createElement('table');

        table.style.width = '60%';
        table.appendChild(thead(listFieldObj));
        table.appendChild(tbody());
        table.appendChild(tfoot());

        container.insertAdjacentElement('afterbegin', table);
    }
    // вызов функции getAllTable
    getAllTable(createTableHead, createTableBody, createTableFooter)

})(users);