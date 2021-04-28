// import App from 'next/app'
import { reset, globals } from 'styles'
import Progress from "components/Progress";
import ScrollIcon from "components/ScrollIcon";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
      <Progress />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
