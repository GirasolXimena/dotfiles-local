#!/usr/bin/env node

import installDotfiles from "./app/installDotfiles.js"
import { baseName, basePath, baseRepo, extendedName, extendedPath, extendedRepo, fontName, fontPath, Linux, localZsh, Mac, operatingSystem, Windows } from "./app/constants.js"
import pathologize from "./app/pathologize.js"
import { readdirSync } from "fs"
import makeFolder from "./app/makeFolder.js"
import isDirEmpty from "./app/isDirEmpty.js"
import { execSync } from "child_process"
import path, { sep } from "path"
import installFonts from "./app/installFonts.js"
import installBrew from "./app/installBrew.js"
import { homedir } from "os"

// install base dotfiles from thoughtbot/dotfiles
// installDotfiles(baseName, basePath, baseRepo)

// install extended dotfiles from RobertAndradeJR/dotfiles-local
// installDotfiles(extendedName, extendedPath, extendedRepo)

// install firaCode iScript font
// installFonts(fontName, fontPath)


// install homebrew
// installBrew()

// process.env.RCRC = path.format({
//   dir: basePath,
//   base: 'rcrc'

// })

// try {
//   execSync('rcup', { stdio: 'inherit' })
//   console.log('did the rcup thing')
// } catch (error) {
//   console.log(error)
// }

const changeShell = () => {
  const whichZsh = execSync(`which zsh`, { stdio: 'pipe', shell: '/usr/bin/dash', cwd: '/' }).toString()

  console.log(localZsh, 'jefi')
  console.log(whichZsh)
  // execSync('sh -c "$(wget -O- https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" "" --unattended &> /dev/null', { stdio: 'inherit' })
  // if (whichZsh === localZsh) {
  //   console.log('Already have oh-my-sh as login')
  // } else {
  //   execSync(`chsh${operatingSystem === Mac ? '-s' : ''} $(which zsh)`, { stdio: 'inherit' })
  // }
}
changeShell()


console.log('\n\n\e[32mYour brain gets smart but your head gets dumb\e[m\n')