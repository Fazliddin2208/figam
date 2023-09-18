import MainInfo from './component/MainInfo'
import MainSlider from './component/MainSlider'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className='main'>
        <MainSlider />
        <MainInfo />
      </div>
    </>
  )
}
