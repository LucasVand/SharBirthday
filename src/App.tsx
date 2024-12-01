
import Confetti from 'react-confetti'
import './App.css'
import BackdropImg from './BackdropImg/BackdropImg'
import Box from './Box/Box'
import { useState } from 'react'

import birthdayImg from './assets/birthdayText.png'
import './normalize.css'
import a from './assets/IMG_3212.png'
import b from './assets/IMG_3202.png'
import c from './assets/IMG_3203.png'
import d from './assets/IMG_3204.png'
import e from './assets/IMG_3205.png'
import f from './assets/IMG_3206.png'
import g from './assets/IMG_3207.png'
import h from './assets/IMG_3208.png'
import i from './assets/IMG_3209.png'
import j from './assets/IMG_3210.png'
import k from './assets/IMG_3211.png'
import l from './assets/IMG_3201.png'
import m from './assets/IMG_3008.png'
import n from './assets/IMG_3009.png'
import o from './assets/IMG_3010.png'
import p from './assets/IMG_3011.png'
import q from './assets/IMG_3012.png'
import r from './assets/IMG_3013.png'
import s from './assets/IMG_3014.png'
import t from './assets/IMG_3015.png'
import u from './assets/IMG_3016.png'
import v from './assets/IMG_3017.png'
import w from './assets/IMG_3018.png'
import CountDown from './CountDown'
function App() {


  const picWidth: number = 4
  const [run, setRun] = useState(false)
  const [selectedPic, setSelectedPic] = useState<number | undefined>(undefined)

  // const scrollPos = useScrollPos()
  const startConfetti = () => {
    setRun(true)
    // setTimeout(() => {
    //   setRun(false)
    // }, 5000);
  }
  const confetti = () => {
    if (run) {
      return (
        <Confetti height={2000} tweenDuration={30000} numberOfPieces={3000} recycle={false} onConfettiComplete={() => { setRun(false) }
        } />
      )
    }
  }
  const clickOfPic = (index: number) => {
    if (selectedPic == index) {
      setSelectedPic(undefined)
      return
    }
    setSelectedPic(index)
  }

  return (
    <>
      {confetti()}
      <div className='cont'>
        <div style={{ height: '18.5em' }}>
          <img src={birthdayImg} style={{ width: "22em" }}></img>
        </div>
        <Box width={20} height={3}>
          <h3 style={{}}>I hope you have an amazing day</h3>
        </Box>
        <Box width={15} height={3}>
          <h3>I Love You So Much!</h3>
        </Box>
        <CountDown></CountDown>

        <Box width={22} height={24}>
          <p style={{ width: '18em', textAlign: "justify", fontWeight: 'bold' }}>You are the best ever and I am so thankful that I can you mine. You make me so happy everyday and you my favourite person in the entire world, you are the kindest, most sweet, nice, and caring person. Who treats me incredably well and you care for me and do everything for me. You are also the most beautiful women I have ever seen, everytime I look at you I am stunned by your beauty. Have an amazing day, you deserve the world. I love you so much!!</p>
        </Box>
        <button style={{ backgroundColor: "var(--secondary)", borderStyle: 'none', color: "var(--primary)", fontSize: '1.5em', padding: '0.5em', margin: '0.5em', width: "8em", borderRadius: '1em' }} onClick={startConfetti}>Click Me</button>

        <h2>Some of My Best Memories</h2>
        <div className='pictureCont'>
          <BackdropImg img={a} width={picWidth} angle={0} selected={selectedPic} index={0} onClick={() => { clickOfPic(0) }}></BackdropImg >
          <BackdropImg img={b} width={picWidth} angle={0} selected={selectedPic} index={1} onClick={() => { clickOfPic(1) }}></BackdropImg >
          <BackdropImg img={c} width={picWidth} angle={0} selected={selectedPic} index={2} onClick={() => { clickOfPic(2) }}></BackdropImg >
          <BackdropImg img={d} width={picWidth} angle={0} selected={selectedPic} index={3} onClick={() => { clickOfPic(3) }}></BackdropImg >
          <BackdropImg img={e} width={picWidth} angle={0} selected={selectedPic} index={4} onClick={() => { clickOfPic(4) }}></BackdropImg >
          <BackdropImg img={f} width={picWidth} angle={0} selected={selectedPic} index={5} onClick={() => { clickOfPic(5) }}></BackdropImg >
          <BackdropImg img={g} width={picWidth} angle={0} selected={selectedPic} index={6} onClick={() => { clickOfPic(6) }}></BackdropImg >
          <BackdropImg img={h} width={picWidth} angle={0} selected={selectedPic} index={7} onClick={() => { clickOfPic(7) }}></BackdropImg >
          <BackdropImg img={i} width={picWidth} angle={0} selected={selectedPic} index={8} onClick={() => { clickOfPic(8) }}></BackdropImg >
          <BackdropImg img={j} width={picWidth} angle={0} selected={selectedPic} index={9} onClick={() => { clickOfPic(9) }}></BackdropImg >
          <BackdropImg img={k} width={picWidth} angle={0} selected={selectedPic} index={10} onClick={() => { clickOfPic(10) }}></BackdropImg >
          <BackdropImg img={l} width={picWidth} angle={0} selected={selectedPic} index={11} onClick={() => { clickOfPic(11) }}></BackdropImg >
          <BackdropImg img={m} width={picWidth} angle={0} selected={selectedPic} index={12} onClick={() => { clickOfPic(12) }}></BackdropImg >
          <BackdropImg img={n} width={picWidth} angle={0} selected={selectedPic} index={13} onClick={() => { clickOfPic(13) }}></BackdropImg >
          <BackdropImg img={o} width={picWidth} angle={0} selected={selectedPic} index={14} onClick={() => { clickOfPic(14) }}></BackdropImg >
          <BackdropImg img={p} width={picWidth} angle={0} selected={selectedPic} index={15} onClick={() => { clickOfPic(15) }}></BackdropImg >
          <BackdropImg img={q} width={picWidth} angle={0} selected={selectedPic} index={16} onClick={() => { clickOfPic(16) }}></BackdropImg >
          <BackdropImg img={r} width={picWidth} angle={0} selected={selectedPic} index={17} onClick={() => { clickOfPic(17) }}></BackdropImg >
          <BackdropImg img={s} width={picWidth} angle={0} selected={selectedPic} index={18} onClick={() => { clickOfPic(18) }}></BackdropImg >
          <BackdropImg img={t} width={picWidth} angle={0} selected={selectedPic} index={19} onClick={() => { clickOfPic(19) }}></BackdropImg >
          <BackdropImg img={u} width={picWidth} angle={0} selected={selectedPic} index={20} onClick={() => { clickOfPic(20) }}></BackdropImg >
          <BackdropImg img={v} width={picWidth} angle={0} selected={selectedPic} index={21} onClick={() => { clickOfPic(21) }}></BackdropImg >
          <BackdropImg img={w} width={picWidth} angle={0} selected={selectedPic} index={22} onClick={() => { clickOfPic(22) }}></BackdropImg >

        </div>

        <h6>Made With Love From Lucas</h6>
      </div>
    </>
  )
}


// function useScrollPos() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = () => {
//     const position = window.scrollY;
//     setScrollPosition(position);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return scrollPosition
// }

export default App
