var fs = require('fs');

function writeDetails(data, callback) {
    console.log('Executed before sync file write');
    var json;
    var inputData = {
        "cardholdername": data.cardholdername,
        "cardlimit": data.cardlimit,
        "cardnumber": data.cardnumber,
        "balance": 0
    }
    fs.readFile('./storage/file.json', function (err, readData) {
        if (err) {
            console.log('READ  ERROR' + err);
            callback({
                status: 500,
                msg: 'READ Unable to process the request at the moment. Please try again later.',
                data: err
            });
        }
        console.log("ReadData " + readData);
        if (readData.length == 0) {
            readData = "[]";

        }
        json = JSON.parse(readData);
        json.push(inputData);

        data = JSON.stringify(json);
        console.log("Json stringfy " + data);

        fs.writeFile('./storage/file.json', data, 'utf8', (error) => {
            if (error) {
                console.log('WRITE ERROR' + error);
                callback({
                    status: 500,
                    msg: 'Unable to process the request at the moment. Please try again later.',
                    data: error
                });
            }
            console.log('WRITE SUCC' + data);
            callback({
                status: 201,
                msg: 'Record created successfully.',
                data: json
            });

            console.log('Data written to file');
        });
    });
    console.log('Executed after file write');
}

exports.writeDetails = writeDetails;