import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <title>Rarty - Something</title>
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content="Change me"/>
          <meta name="keywords" content="Change me"/>
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}