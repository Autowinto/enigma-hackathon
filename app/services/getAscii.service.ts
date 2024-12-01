'use server'

import fs from 'node:fs'
import path from 'node:path'

export default async function getAsciiArray() {
  // Read all file names in assets folder
  // eslint-disable-next-line node/prefer-global/process
  const asciiFiles = fs.readdirSync(path.join(process.cwd(), 'app/assets'))
  const asciiArray: string[] = []
  // Read all files in assets folder
  asciiFiles.forEach(async (file) => {
    let data = ''
    try {
      // eslint-disable-next-line node/prefer-global/process
      data = fs.readFileSync(path.join(process.cwd(), 'app/assets', file), 'ascii')
      asciiArray.push(data)
    }
    catch (err) {
      console.error(err)
    }
  },
  )
  return asciiArray
}
