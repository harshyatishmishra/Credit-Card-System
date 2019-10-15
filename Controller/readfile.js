var fs = require('fs');
var constants = require('../Constants/Constants');

function getAllDetails(callback) {
    console.log('Executed before Async file read');
    if (fs.existsSync(constants.FILE_PATH)) {
        fs.readFile(constants.FILE_PATH, constants.ENCODING, function (error, data) {

            if (error) {

                callback({
                    status: false,
                    msg: 'Unable to process the reuest at the moment. Please try again later.',
                    data: error
                });
            }

            callback({ status: 200, msg: 'Successfull', data: JSON.parse(data) });
        });

        console.log('Executed after file read');
    }
}

exports.getAllDetails = getAllDetails;