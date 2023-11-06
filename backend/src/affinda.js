const { AffindaCredential, AffindaAPI } = require('@affinda/affinda')
require('dotenv').config()

const affindaApi = async (readStream) => {
  const credential = new AffindaCredential(
    process.env.AFFINDA_API,
  )
  const client = new AffindaAPI(credential)
  const response = await client
    .createResume({ file: readStream })
    .then(result => ({ result: result }))
    .catch(err => ({ error: err }))
  return response
}
module.exports = affindaApi
