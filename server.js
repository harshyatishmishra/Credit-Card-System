const cors = require('cors')
var express = require('express');
var bodyParser = require('body-parser');
const creditCardController = require('./Controller/creditCardController');
const { check, validationResult } = require('express-validator');
const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());
var corsOptions = {
    origin: 'http://localhost:4000'
}
app.use(cors(corsOptions));
app.listen(port, () => console.log(`Credit card app listening on port ${port}!`));

let stu = {
    "cardholdername": "Sara",
    "cardlimit": 23,
    "cardnumber": "123443211234"
};

app.post('/creditcard', [
    check('cardholdername').not().isEmpty().withMessage('Card Holder Name should not be Empty.')
        .isAlpha().withMessage('Card Holder Name should contain only Alphabets'),
    check('cardnumber').isLength({ min: 16, max: 19 }).withMessage('Card Number length must be between 16 and 19')
        .isNumeric().withMessage('Card Number must be Numeric'),
    check('cardlimit').isNumeric().withMessage('Card limit must be Numeric')

], (req, res) => {

    const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
        return { "status": 422, "msg": `${msg}` };
    };
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        return res.status(422).json({ msg: errors.array() });
    }

    creditCardController.addDetails(req.body, (result) => { //

        console.log("status" + result.status);
        res.status(result.status);
        res.send(result);

    });
});

app.get('/creditcard', (req, res) => {

    creditCardController.creditCardDetails((result) => {
        res.send(result);
    });

});