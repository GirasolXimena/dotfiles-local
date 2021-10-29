import pathologize from "./pathologize.js"

// environment variables
const {
  env: {
    DOTFILES_FILENAME,
    LOCAL_DOTFILES_FILENAME,
    DOTFILES_REPO,
    LOCAL_DOTFILES_REPO
  }
} = process

// Repository URLs
export const baseRepo = DOTFILES_REPO || 'https://github.com/thoughtbot/dotfiles.git'
export const extendedRepo = LOCAL_DOTFILES_REPO || 'https://github.com/RobertAndradeJR/dotfiles-local.git'



// File names
export const baseName = DOTFILES_FILENAME || 'dotfiles'
export const extendedName = LOCAL_DOTFILES_FILENAME || 'dotfiles-local'

// File paths
export const basePath = pathologize(baseName)
export const extendedPath = pathologize(extendedName)
