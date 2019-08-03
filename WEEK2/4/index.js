// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

function createNewContact(name, phones) {
    phoneBook[name] = [];
    phones.forEach(function(phone) {
        phoneBook[name].push(phone);
    });
}

function addContact(name, phones) {
    var keys = Object.keys(phoneBook);
    if (keys.length === 0) {
        createNewContact(name, phones);
    } else {
        var index = keys.indexOf(name);
        if (index === -1) {
            createNewContact(name, phones);
        } else {
            phones.forEach(function(phone) {
                phoneBook[name].push(phone);
            });
        }
    }
}

function showContactList() {
    var keys = Object.keys(phoneBook).sort();
    var contacts = [];
    keys.forEach(function(key) {
        if(phoneBook[key].length !== 0) {
            contacts.push(key + ': ' + phoneBook[key].join(', '));
        }
    });
    return contacts;
}
function removeContact(phone) {
    var keys = Object.keys(phoneBook);
    var result = false;
    keys.forEach(function(key) {
        var phones = phoneBook[key];
        if (phones.indexOf(phone) != -1) {
            phones.splice(phones.indexOf(phone), 1);
            result = true;
        }
    });
    return result;
}

module.exports = function (command) {
    var argumentsPH = command.split(' ');
    var commandName = argumentsPH[0];

    if (commandName === 'ADD') {
        var name = argumentsPH[1];
        var phones = argumentsPH[2].split(',');
        return addContact(name, phones);
    }

    if (commandName === 'SHOW') {
        return showContactList();
    }

    if (commandName === 'REMOVE_PHONE') {
        var phone = argumentsPH[1];
        return removeContact(phone);
    }
};