import pathologize from "./pathologize.js"
import { sep } from "path"
import { type } from "os"


// environment variables
const {
  env: {
    DOTFILES_FILENAME,
    LOCAL_DOTFILES_FILENAME,
    DOTFILES_REPO,
    LOCAL_DOTFILES_REPO,
    FONT_NAME
  }
} = process

// Repository URLs
export const baseRepo = DOTFILES_REPO || 'https://github.com/thoughtbot/dotfiles.git'
export const extendedRepo = LOCAL_DOTFILES_REPO || 'https://github.com/RobertAndradeJR/dotfiles-local.git'



// File names
export const baseName = DOTFILES_FILENAME || 'dotfiles'
export const extendedName = LOCAL_DOTFILES_FILENAME || 'dotfiles-local'
export const fontName = FONT_NAME || `Library${sep}Fonts${sep}`

// File paths
export const basePath = pathologize(baseName)
export const extendedPath = pathologize(extendedName)
export const fontPath = pathologize(fontName)
export const operatingSystem = type()
export const Mac = 'Darwin'
export const Linux = 'Linux'
export const Windows = 'Windows_NT'
export const localZsh = '/usr/bin/zsh'