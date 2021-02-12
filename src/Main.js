import WebSocketClient from './WebSocketClient'

export default {
  install (app, connection, options = {}) {
    const socketClient = new WebSocketClient(connection, options)
    if (!options.connectManually) {
      socketClient.connect()
    }
    app.config.globalProperties.$socket = socketClient
    app.provide('socket', socketClient)
  }
}
