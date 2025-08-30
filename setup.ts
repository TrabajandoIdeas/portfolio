const envVarsFile = await Bun.file('./base.env').text()
const lineSpliter = /\r?\n/

const envFile = Bun.file('./.env')

if (await envFile.exists()) {
  const shouldOverwrite = prompt('The .env file already exists.\n Do you want to overwrite it? [y/N]')

  if (shouldOverwrite?.toLowerCase() !== 'y') {
    console.log('Finishing the process')
    process.exit()
  }
}

let newValueAlreadyDisplayed = false

const filledEnvVars = envVarsFile.split(lineSpliter).map((envVar) => {
  if (envVar === '') return envVar

  const [
    key = '',
    value
  ] = envVar.split('=')

  if (value !== '') {
    return envVar
  }
  if (!newValueAlreadyDisplayed) {
    console.log('Insert a new value for:')
    newValueAlreadyDisplayed = true
  }

  let newValue = prompt(key + '=')

  if (newValue === null) newValue = ''

  return key + '=' + newValue
}).join('\n')

console.log('Saving env vars')
await envFile.write(filledEnvVars)
console.log('Saved')
