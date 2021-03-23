const express = require('express')
const router = express.Router()
const { RtcTokenBuilder, RtcRole } = require('agora-access-token')

const APP_ID = '1b586c670405410b946dffc0b66af921'
const APP_CERTIFICATE = '5d3a31f37aad43ccbedbe2b0ca04cd84'
let channelName = null
let uid = null

router.post('/', (req, res) => {
  channelName = req.body.channelName
  uid = Number(req.body.uid) // uidはInt指定のため変換

  const appID = APP_ID
  const appCertificate = APP_CERTIFICATE
  const role = RtcRole.PUBLISHER

  const expirationTimeInSeconds = 3600

  const currentTimestamp = Math.floor(Date.now() / 1000)

  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

  const token = RtcTokenBuilder.buildTokenWithUid(
    appID,
    appCertificate,
    channelName,
    uid,
    role,
    privilegeExpiredTs
  )
  console.log(`Token: ${token}`)

  res.json({
    token,
  })
})

module.exports = router
