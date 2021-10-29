#!/usr/bin/env node

import installDotfiles from "./app/installDotfiles.js"
import { baseName, basePath, baseRepo, extendedName, extendedPath, extendedRepo } from "./app/constants.js"
import pathologize from "./app/pathologize.js"
import { readdirSync } from "fs"
import makeFolder from "./app/makeFolder.js"
import isDirEmpty from "./app/isDirEmpty.js"
import { execSync } from "child_process"

// install base dotfiles from thoughtbot/dotfiles
// installDotfiles(baseName, basePath, baseRepo)

// install extended dotfiles from RobertAndradeJR/dotfiles-local
// installDotfiles(extendedName, extendedPath, extendedRepo)


const fontPath = pathologize('Library/Fonts/')
makeFolder(fontPath)

const fontFolder = readdirSync(fontPath)

if (isDirEmpty(fontPath)) {
  console.log('Installing Fonts...')
  try {
    execSync(`cp ./FiraCodeiScript/**.ttf $HOME/Library/Fonts`, { stdio: 'inherit' })
  } catch (error) {
    console.log(error)
  }
}
// console.log(fontFolder)