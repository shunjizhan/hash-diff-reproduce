# hash-diff-reproduce

It reprodeces the different result of `nToU8a` with polkadot api version 8 & 9.

```
cd api8
yarn
node index.mjs

-------------------
@polkadot/api@8.8.1
-------------------

hexToU8a(0xf9655bfef23bf7dad14a037aa39758daccfd8dc99a7ce69525f81548068a5946) => Uint8Array(32) [
  249, 101,  91, 254, 242,  59, 247, 218,
  209,  74,   3, 122, 163, 151,  88, 218,
  204, 253, 141, 201, 154, 124, 230, 149,
   37, 248,  21,  72,   6, 138,  89,  70
]
nToU8a(0) =>  Uint8Array(0) []
nToU8a(1) => Uint8Array(1) [ 1 ]

---------------------------------------------------------------

cd ../api9
yarn
node index.mjs

-------------------
@polkadot/api@9.9.1
-------------------

hexToU8a(0xf9655bfef23bf7dad14a037aa39758daccfd8dc99a7ce69525f81548068a5946) => Uint8Array(32) [
  249, 101,  91, 254, 242,  59, 247, 218,
  209,  74,   3, 122, 163, 151,  88, 218,
  204, 253, 141, 201, 154, 124, 230, 149,
   37, 248,  21,  72,   6, 138,  89,  70
]
nToU8a(0) =>  Uint8Array(1) [ 0 ]
nToU8a(1) => Uint8Array(1) [ 1 ]

```