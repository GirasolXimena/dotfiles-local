import path from 'path'
import { homedir } from 'os'

export default base => path.format({
  dir: homedir(),
  base
})
