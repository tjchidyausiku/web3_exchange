require('@nomiclabs/hardhat-waffle');
//https://eth-goerli.g.alchemy.com/v2/Sa8FIKzvvhvxrobTICergHiizf0KLwrB
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Sa8FIKzvvhvxrobTICergHiizf0KLwrB',
      accounts: ['0x89E41D585a6c08D5024441540842f1b8DC87aA41git'],
    },
  },
};