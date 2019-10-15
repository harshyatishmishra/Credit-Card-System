const writefile = require('./writefile');
const readfile = require('./readfile');
const luhn = require('../Validator/luhnCheck');

module.exports.addDetails = function (data, callback) {
    if (!luhn.luhn10Check(data.cardnumber)) {
        callback({
            status: 422,
            msg: 'Luhn Check failed. Credit Card Number is not valid.'
        });
        return;
    }

    writefile.writeDetails(data, function (d) {
        callback(d);
    });
}

module.exports.creditCardDetails = function (callback) {
    readfile.getAllDetails(function (call) {
        callback(call);
    });
}
