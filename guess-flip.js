import * as myModule from './modules/coin.mjs';
import minimist from "minimist"

const args = minimist(process.argv.slice(2));
const call = args.call // || console.error("Error: no input. \nUsage: node guess-flip --call=[heads|tails]"); process.exit(1)
if(call == null || (call !== "heads" && call !== "tails")){
    console.error("Error: no input. \nUsage: node guess-flip --call=[heads|tails]"); 
}  
console.log(myModule.flipACoin(call))