import * as myModule from './modules/coin.mjs';
import minimist from "minimist"

const args = minimist(process.argv.slice(2));
const flips = args.number || 1

const results = myModule.coinFlips(flips)
console.log(results)

console.log(myModule.countFlips(results))
