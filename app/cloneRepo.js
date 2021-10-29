import { execSync } from "child_process"
import isDirEmpty from "./isDirEmpty.js"

const cloneRepo = (repo, path) => {
  try {
    execSync(`git clone ${repo} ${path} --recurse`, {stdio: 'inherit'})
  } catch (err) {
    console.log(err.message)
  }
  
}

export default (label, path, repo) => isDirEmpty(path) ? cloneRepo(repo, path) : console.log(`${label} already exists`)