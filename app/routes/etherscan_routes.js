var ObjectID = require('mongodb').ObjectID;
const Etherscan = require('node-etherscan-api');
const TOKEN_API = 'PH1GE82CXDPME2VI4YDII59789X36UB957'
const etherscan = new Etherscan(TOKEN_API);

module.exports = function(app, db) {
    app.post('/transactions', async (req, res) => {
        const accountAddress = req.body.address;

        const transactionsList = await etherscan
        .getTransactions(accountAddress, {
            startBlock: 0,
            endBlock:   9999999,
            offset:     1000,
            page:       1,
            sort:       'asc'
        });

        const balance = await etherscan.getAccountBalance(accountAddress);

        try {
            transactionsList.forEach(async (item) => {
            item['balance'] = balance; 
            await db.collection('transactions').insert(item)});
            return res.json(transactionsList);
        } catch (err) {
            console.log(err);
            return res.send({'error':'Error has occurred'});
        }
    });

    app.get('/transactions', async (req, res) => {
        const toAddress = req.query.address;
        const blockNum = req.query.blockNumber;
        const gasUsed = req.query.gasUsed;
        
        var queryParams = { $or: [ { to: toAddress }, { blockNumber: { $gte: blockNum }}, { gasUsed: { $gte: gasUsed } } ] }
        try {
            var out = await db.collection('transactions').find(queryParams).toArray();
            res.json(out);
        }
        catch (err) {
            res.send({'error':'An error has occurred'});
        }
    });
};