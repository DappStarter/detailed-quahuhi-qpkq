require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remind concert gesture dry foam spoil'; 
let testAccounts = [
"0xb47699f5571e3a80a212e95622196bcfb89ab713cb2e69caccb5c65936325f57",
"0xc412fdd0630395699157e17aad726b68d6455496c3ea3d54f7133a439f6b8c3f",
"0xa795985e9f9d26c78dac078e7ab59aee1276afcc640f40c4658a65ad6071cfa6",
"0xf548f0db4000f76f88aff41789db2bc60b3e4e8ece199e567d3434653bcd2cab",
"0xdef8630fafea5a67fe37be673e7c972147d18f35ff1f5bdd5862d063e6fc1057",
"0x378ce1adf6bfa9b76b78ff7cc88cea76887c46ed40e4511f952dd4de8a6c0063",
"0xb11de197a864644b7f09fd0ab5ba849fcc2aa654ebae74ad095d68a1891fe2e8",
"0x0ad284f4eb53928da580f5c697698302a8389648b219da1a105f38227f0bf450",
"0x04503133e398d6af7da37099e9713aa6a05110cac2b74057a3841899e9cb3822",
"0x1733ded60073c8b4589c538277db71f9e02a768578281508ac85494c50513c20"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


