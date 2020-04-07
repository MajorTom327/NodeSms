import * as SerialPort from 'serialport'
import { Sms } from 'types/sms'

const port: SerialPort = new SerialPort('/dev/ttyUSB0', { baudRate: 460800 })

port.on('error', err => {
  console.error(err)
})

port.on('data', function (data) {
  console.log('Data:', data.toString('utf8'))
})

const SendActions = (actions: string[]): Promise<void> => {
  if (actions.length > 0) {
    port.write(actions[0] + '\r', err => {
      if (err) {
        console.log(`Cannot send message "${actions[0]}"`, err)
        return Promise.reject()
      }
      return SendActions(actions.slice(1))
    })
  }
  return Promise.resolve()
}

export const SendPin = (): Promise<void> => {
  return SendActions(['AT', `AT+CPIN="1234"`])
}

export const SendSMS = (sms: Sms): Promise => {
  return SendActions([
    'AT',
    'AT+CMGF=1',
    `AT+CMGS="${sms.phone}"`,
    `${sms.message}`,
    '\x1A'
  ])
}

SendPin()
