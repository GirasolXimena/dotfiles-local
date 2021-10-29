#!/usr/bin/env bash
#run this script to install automagically
# wget -O - https://raw.githubusercontent.com/RobertAndradeJr/dotfiles-local/master/install.sh | bash


# Clone dotfiles from thoughtbot
DOTFILES="$HOME/dotfiles"
if [ -f "$DOTFILES" ]; then
  git clone https://github.com/thoughtbot/dotfiles.git $HOME/dotfiles
  echo "Installing thoughtbot dotfiles"
else
  echo "dotfiles already installed, skipping..."
fi

# Clone dotfiles from RobertAndradeJr
DOTFILESLOCAL="$HOME/dotfiles-local"
if [ -f "$DOTFILESLOCAL" ]; then
  git clone https://github.com/RobertAndradeJR/dotfiles-local.git $HOME/dotfiles-local --recurse
  echo "Installing local dotfiles"
else
  echo "Local dotfiles already installed, skipping..."
fi

# Install fonts
FIRACODEISCRIPT="$HOME/Library/Fonts/Fira*.tff"
if [ -f "$FIRACODEISCRIPT" ]; then
  echo "Fira Code iScript already installed..."
else
  cp ./FiraCodeiScript/**.ttf $HOME/Library/Fonts
  echo "Fire Code iScript installed"
fi


# Check if brew is installed,
# if it is then run bundle install
# if it is not then install brew
which -s brew
if [[ $? != 0 ]] ; then
  ruby -e `$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`
else
  brew update
fi

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
cat $HOME/dotfiles-local/shrek.txt
echo ""
echo ""
printf "\e[32mYour brain gets smart but your head gets dumb\e[m\n"
