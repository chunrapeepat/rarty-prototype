import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <title>Rarty - Rent a dress, Chase a dream</title>
          <link rel="stylesheet" href="/static/css/bootstrap.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"/>
          <link href="https://fonts.googleapis.com/css?family=Kanit:300,400,500" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:600" rel="stylesheet" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content="Change me"/>
          <meta name="keywords" content="Change me"/>
          {styleTags}
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