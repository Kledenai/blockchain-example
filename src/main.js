const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('54a4v5ad07dec40c91sA2051bab3480c39032e90051adv5sf3e18c3e07c23e3273995cf');

const myWalletAddress = myKey.getPublic('hex');

const CaronCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
CaronCoin.addTransaction(tx1);

CaronCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
CaronCoin.addTransaction(tx2);

CaronCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${CaronCoin.getBalanceOfAddress(myWalletAddress)}`);

console.log();
console.log('Blockchain valid?', CaronCoin.isChainValid() ? 'Yes' : 'No');
