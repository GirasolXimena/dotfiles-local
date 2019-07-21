#!/bin/bash

# Clone dotfiles from thoughtbot
echo "\nInstalling thoughtbot dotfiles\n"
git clone https://github.com/thoughtbot/dotfiles.git ~/dotfiles

# Install dotfiles and run rcup
echo "\nInstalling and running dotfiles\n"
env RCRC=$HOME/dotfiles/rcrc rcup

# Change from vim to neovim
echo "\nInstalling and running vim packages on neovim\n"
touch ~/.config/nvim/init.vim
set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc

# Zsh as login shell 
chsh -s $(which zsh)

# Finished installing message
echo "\nFinished installing :-)\n"
