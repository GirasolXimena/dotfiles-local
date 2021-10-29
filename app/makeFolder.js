import { mkdirSync } from "fs"

export default (path, label) => {
  mkdirSync(path, {recursive: true}, err => {
    console.log(`error making ${label} folder`, path ,err.message)
  })
}