import { operatingSystem, Windows, Mac } from "./constants.js"
import { execSync } from 'child_process'

export default () => {
  if (operatingSystem === Windows) {
    // which brew windows
  } else {
    // which brew *nix
    const brewPath = execSync(`which${operatingSystem === Mac ? ' -s' : ''} brew`, { stdio: 'pipe' })
    const command = brewPath ? 'brew update' : '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'

    execSync(command, { stdio: 'inherit' })
    execSync('brew install rcm', { stdio: 'inherit' })
    execSync('brew install zsh', { stdio: 'inherit' })
  }
}