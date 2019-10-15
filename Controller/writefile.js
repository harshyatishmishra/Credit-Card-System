var fs = require('fs');
var constants = require('../Constants/Constants');

function writeDetails(data, callback) {
    console.log('Executed before sync file write');
    var existingData;
    var inputData = {
        "cardholdername": data.cardholdername,
        "cardlimit": data.cardlimit,
        "cardnumber": data.cardnumber,
        "balance": 0
    };
    if (fs.existsSync(constants.FILE_PATH)) {

        fs.readFile(constants.FILE_PATH, function (err, readData) {
            if (err) {

                callback({
                    status: 500,
                    msg: 'Unable to process the request at the moment. Please try again later.',
                    data: err
                });
                return;
            }
            console.log('File Read' + readData);

            existingData = JSON.parse(readData);
            existingData.push(inputData);
            data = JSON.stringify(existingData);

            writeFileWithData(data, function (d) {
                callback(d);
            });

        });
    } else {
        var jsonData = JSON.parse("[]");
        jsonData.push(inputData);
        data = JSON.stringify(jsonData); console.log("1");
        writeFileWithData(data, function (d) {
            callback(d);
        });
        console.log("2");
    }
    console.log('Executed after file write');
}

function writeFileWithData(inputData, callback) {

    fs.writeFile(constants.FILE_PATH, inputData, constants.ENCODING, (error) => {
        if (error) {
            console.log("3");
            callback({
                status: 500,
                msg: 'Unable to process the request at the moment. Please try again later.',
                data: error
            });
            return;
        }
        console.log("4");
        callback({
            status: 201,
            msg: 'Record created successfully.',
            data: JSON.parse(inputData)
        });

        console.log('Data written to file');
    });
}
exports.writeDetails = writeDetails;