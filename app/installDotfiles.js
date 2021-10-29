import cloneRepo from "./cloneRepo.js"
import makeFolder from "./makeFolder.js"

export default (label, path, repo) => {
  makeFolder(path, label)
  cloneRepo(label, path, repo)
}