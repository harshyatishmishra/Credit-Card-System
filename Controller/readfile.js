var fs = require('fs');

function getAllDetails(callback) {
    console.log('Executed before Async file read');
    fs.readFile('./storage/file.json', 'utf8', function (error, data) {

        if (error) {
            console.error('Unable to process the request ' + error);
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

exports.getAllDetails = getAllDetails;