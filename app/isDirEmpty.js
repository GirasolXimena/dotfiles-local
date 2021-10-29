import { readdirSync } from "fs";

export default path => readdirSync(path).length === 0