#!/bin/bash 

# Clone dotfiles from thoughtbot
DOTFILES="$HOME/dotfiles"
if [ -f "$DOTFILES" ]; then
  git clone https://github.com/thoughtbot/dotfiles.git $HOME/dotfiles
  echo "Installing thoughtbot dotfiles"
else
  echo "dotfiles already installed, skipping..."
fi

# Check if brew is installed, if it is then run bundle install and if it is not then install it
which -s brew
if [[ $? != 0 ]] ; then
	ruby -e `$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`
else
	brew update
fi

#Install apps from brew bundle
brew bundle install

# Install dotfiles and run rcup
env RCRC=$HOME/dotfiles/rcrc rcup
echo "Installing and running dotfiles config"

# Change from vim to neovim

NVIMFILE="$HOME/.config/nvim/init.vim"
if [ ! -f "$NVIMFILE" ]; then
	mkdir -p "$(dirname "$NVIMFILE")" && touch "$NVIMFILE"
	echo "Making nvim init file"
fi
echo "Installing and running vim packages for neovim"
echo "set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc" > $NVIMFILE

# Zsh as login shell

if [ "$(which zsh)" == "/usr/local/bin/zsh" ]; then
	echo "Already have oh-my-zsh as login shell"
else
	chsh -s $(which zsh)
fi

# Finished installing message

echo "Finished installing"
