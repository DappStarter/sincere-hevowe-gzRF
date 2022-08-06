require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note pave put hunt robot equal gasp'; 
let testAccounts = [
"0xa42acfdf5d04fbe09d7acc3d32a54d65f0767320bc65ef85a737ceaca86c1698",
"0x329a32f1973b1e8a41f45ba52b8ee9fb8772feeed0e6fdd370f747cf548379ac",
"0x191625c338b099e3986e3f878979a787eea66f1c2a8ca2cf58430620aeb3794c",
"0xac19de5c898b768f81f871f1b982978ea58d8c95836c85ad6cddf30c4a6e2bcb",
"0xf8ce9e3e8ccc00c4b251619551ac0f859e48008f21ffeb7d809a2bdfb67a3cfa",
"0x12e8fb59db64305bf0243535e78c442f8a3b668c9474a1037bd1ff78cbb25489",
"0x75f6ebe1c7c6ed98565e20f90a0b421e0e7a9380c739d6ab369e6fbaaee6cda5",
"0x36a50e72ce76b49f819cde9098b30a89424044aec5a6dc6c14a5f5c480feca93",
"0x7a55c22828ce918bef13ffcd2f67a1bb7fcb24ad2ede0a5bc95b0703307b3f0a",
"0xd971555e972e10fc4e3838600da22e296eb2b5d09e0b0b2e19f461c6015cd2f9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

