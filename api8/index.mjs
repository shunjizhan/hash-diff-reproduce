import { hexToU8a, nToU8a } from '@polkadot/util';

console.log(`
-------------------
@polkadot/api@8.8.1
-------------------
`)
const blockHash = '0xf9655bfef23bf7dad14a037aa39758daccfd8dc99a7ce69525f81548068a5946'
console.log('hexToU8a(0xf9655bfef23bf7dad14a037aa39758daccfd8dc99a7ce69525f81548068a5946) =>', hexToU8a(blockHash));
console.log('nToU8a(0) => ', nToU8a(0));
console.log('nToU8a(1) =>', nToU8a(1));
