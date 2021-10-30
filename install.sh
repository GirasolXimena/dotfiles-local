#!/usr/bin/env bash
#run this script to install automagically
# wget -O - https://raw.githubusercontent.com/RobertAndradeJr/dotfiles-local/master/install.sh | bash



# Zsh as login shell

if [ "$(which zsh)" == "/usr/local/bin/zsh" ]; then
  echo "Already have oh-my-zsh as login shell"
else
  chsh -s $(which zsh)
fi


# download oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"