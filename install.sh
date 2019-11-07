#!/bin/bash # Clone dotfiles from thoughtbot
DOTFILES="~/dotfiles"
if [ -f "$DOTFILES" ]; then
  git clone https://github.com/thoughtbot/dotfiles.git ~/dotfiles
  echo `Installing thoughtbot dotfiles`
else
  echo "dotfiles already installed, skipping..."
fi
# Check if brew is installed, if it is then run bundle install and if it is not then install it
which -s brew
if [[ $? != 0 ]] ; then
    # Install Homebrew
    ruby -e `$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`
else
	# Update Homebrew
    brew update
fi

#Install apps from brew bundle
brew bundle install

# Install dotfiles and run rcup
echo "Installing and running dotfiles"
env RCRC=$HOME/dotfiles/rcrc rcup

# Change from vim to neovim
echo "Installing and running vim packages on neovim"
touch ~/.config/nvim/init.vim
set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc

# Zsh as login shell
chsh -s $(which zsh)

# Finished installing message
echo "Finished installing"
