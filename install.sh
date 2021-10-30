#!/usr/bin/env bash
#run this script to install automagically
# wget -O - https://raw.githubusercontent.com/RobertAndradeJr/dotfiles-local/master/install.sh | bash

#Install apps from brew bundle
# brew bundle install

# Install dotfiles and run rcup
env RCRC=$HOME/dotfiles/rcrc rcup
echo "Installing and running dotfiles config"

# Change from vim to neovim

# NVIMFILE="$HOME/.config/nvim/init.vim"
# if [ ! -f "$NVIMFILE" ]; then
#   mkdir -p "$(dirname "$NVIMFILE")" && touch "$NVIMFILE"
#   echo "Making nvim init file"
# fi
# echo "Installing and running vim packages for neovim"
# echo "set runtimepath^=~/.vim runtimepath+=~/.vim/after
# let &packpath = &runtimepath
# source ~/.vimrc" > $NVIMFILE

# Zsh as login shell

if [ "$(which zsh)" == "/usr/local/bin/zsh" ]; then
  echo "Already have oh-my-zsh as login shell"
else
  chsh -s $(which zsh)
fi

# Finished installing message

echo ""
echo ""
printf "\e[32mYour brain gets smart but your head gets dumb\e[m\n"
