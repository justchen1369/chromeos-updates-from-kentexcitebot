// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer) {
    window.location.reload()
  }
}

export const registerServiceWorker = () => true
