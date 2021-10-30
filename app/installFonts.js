import makeFolder from "./makeFolder.js"
import isDirEmpty from "./isDirEmpty.js"
import { execSync } from "child_process"
import { fontPath } from "./constants.js"

const moveFonts = () => {
  if (isDirEmpty(fontPath)) {
    console.log('Installing Fonts...')
    try {
      execSync(`cp ./FiraCodeiScript/**.ttf ${fontPath}`, { stdio: 'inherit' })
      console.log('Fonts moved to fonts folder at ', fontPath)
      // execSync('sudo fc-cache -f -v')
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log('dir is not empty')
  }
}


export default (label, path) => {
  makeFolder(path, label)
  moveFonts()
}