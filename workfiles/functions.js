/*jshint esnext: true */
import 'colors';
import {
    requirements,
    features,
    patterns
} from './strings';
import {
    minTimeout,
    maxTimeout,
    minRequirements,
    maxRequirements,
    skipThreshold,
    failThreshold
} from './numbers';

const article = () => /^[AEIOU]/.test(feature) ? "An " : "A ";
const choose = (l) => l[randBetween(0, l.length)];
const feature = () => choose(features) + choose(patterns);
const printFeature = () => {
    console.log(`\n${article()}${feature()} should`);
    setTimeout(() => { printRequirements(reqs()); }, timeout());
};
const printRequirements = (i) => {
    if (i > 0) {
        if (skipFailOrPass() < skipThreshold) {
            console.log((`- ${choose(requirements)} (SKIPPED)`).cyan);
        } else if (skipFailOrPass() < failThreshold) {
            console.log((`x ${choose(requirements)} (FAILED)`).red);
            console.log((`  - Given I am on the ${choose(features)} page`).green);
            console.log((`  - When I click on the ${choose(features)} link`).green);
            console.log((`  x Then the Log Out link should be visible in the top right hand corner`).red);
        } else {
            console.log((`+ ${choose(requirements)}`).green);
        }
        setTimeout(() => { printRequirements(i - 1); }, timeout());
    } else {
        printFeature();
    }
};
const randBetween = (l, u) => Math.floor(Math.random() * (u - l) + l);
const reqs = () => randBetween(minRequirements, maxRequirements);
const skipFailOrPass = () => Math.random();
const timeout = () => randBetween(minTimeout, maxTimeout);

export default printRequirements;
