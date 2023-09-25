import MainInfo from './component/MainInfo'
import MainSlider from './component/MainSlider'
import Natural from './component/Natural'
import Subscribe from './component/Subscribe'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className='main'>
        <MainSlider />
        <MainInfo />
        <Natural />
        <Subscribe />
      </div>
    </>
  )
}
