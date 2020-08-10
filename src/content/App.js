import React from 'react'
import Form from './Form'
import browser from 'webextension-polyfill'

const App = () => {
  const [visible, setVisible] = React.useState(false)

  browser.runtime.onConnect.addListener(function listener (port) {
    port.onMessage.addListener(function (action) {
      setVisible(action.visible)
      browser.runtime.onConnect.removeListener(listener)
    })
  })

  if (!visible) {
    return null
  }

  return (
    <div className='App App-fade'>
      <Form />
    </div>
  )
}

export default App
