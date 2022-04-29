import * as myModule from './modules/coin.mjs';
import minimist from "minimist"

const args = minimist(process.argv.slice(2));
const call = args.call // || console.error("Error: no input. \nUsage: node guess-flip --call=[heads|tails]"); process.exit(1)
if(call == null){
    console.log("Error: no input. \nUsage: node guess-flip --call=[heads|tails]"); 
} else if(call != "heads" && call != "tails"){
    console.log("Error: no input. \nUsage: node guess-flip --call=[heads|tails]"); 
} else {
    console.log(myModule.flipACoin(call))
}

