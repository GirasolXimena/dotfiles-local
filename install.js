#!/usr/bin/env node

import { execSync } from 'child_process'
import { mkdirSync, readdirSync, stat } from 'fs'
import os from 'os'
import path from 'path'

const { env: {DOTFILES_FILENAME, LOCAL_DOTFILES_FILENAME} } = process
const { homedir } = os

const baseRepo = 'https://github.com/thoughtbot/dotfiles.git'
const extendedRepo = 'https://github.com/RobertAndradeJR/dotfiles-local.git'

const baseName = DOTFILES_FILENAME || 'dotfiles'
const extendedName = LOCAL_DOTFILES_FILENAME || 'dotfiles-local'

const isDirEmpty = path => readdirSync(path).length === 0

const pathologize = base => path.format({
  dir: homedir(),
  base
})
const basePath = pathologize(baseName)
const extendedPath = pathologize(extendedName)


const makeFolder = (path, label) => {
  mkdirSync(path, {recursive: true}, err => {
    console.log(`error making ${label} folder`, path ,err.message)
  })
}

const cloneRepo = (repo, path) => {
  try {
    execSync(`git clone ${repo} ${path} --recurse`, {stdio: 'inherit'})
  } catch (err) {
    console.log(err.message)
  }
  
}

const makeDotfiles = (label, path, repo) => isDirEmpty(path) ? cloneRepo(repo, path) : console.log(`${label} already exists`)

const installDotfiles = (label, path, repo) => {
  makeFolder(path, label)
  makeDotfiles(label, path, repo)
}


const installBaseDotfiles = () => {
  makeFolder(basePath, baseName)
  makeDotfiles(baseName, basePath, baseRepo)
}

const installExtendedDotfiles = () => {
  makeFolder(extendedPath, extendedName)
  makeDotfiles(extendedName, extendedPath, extendedRepo)
}

// install base dotfiles from thoughtbot/dotfiles
installDotfiles(baseName, basePath, baseRepo)

// install extended dotfiles from RobertAndradeJR/dotfiles-local
installDotfiles(extendedName, extendedPath, extendedRepo)