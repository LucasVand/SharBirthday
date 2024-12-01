
import Confetti from 'react-confetti'
import './App.css'
import BackdropImg from './BackdropImg/BackdropImg'
import Box from './Box/Box'
import { useState } from 'react'

import birthdayImg from './assets/birthdayText.png'
import './normalize.css'
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
        <Box width={22} height={24}>
          <p style={{ width: '18em', textAlign: "justify", fontWeight: 'bold' }}>You are the best ever and I am so thankful that I can you mine. You make me so happy everyday and you my favourite person in the entire world, you are the kindest, most sweet, nice, and caring person. Who treats me incredably well and you care for me and do everything for me. You are also the most beautiful women I have ever seen, everytime I look at you I am stunned by your beauty. Have an amazing day, you deserve the world. I love you so much!!</p>
        </Box>
        <button style={{ backgroundColor: "var(--secondary)", borderStyle: 'none', color: "var(--primary)", fontSize: '1.5em', padding: '0.5em', margin: '0.5em', width: "8em", borderRadius: '1em' }} onClick={startConfetti}>Click Me</button>

        <h2>Some of My Best Memories</h2>
        <div className='pictureCont'>
          <BackdropImg img={'src/assets/IMG_3212.JPG'} width={picWidth} angle={0} selected={selectedPic} index={0} onClick={() => { clickOfPic(0) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3202.JPG'} width={picWidth} angle={0} selected={selectedPic} index={1} onClick={() => { clickOfPic(1) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3203.JPG'} width={picWidth} angle={0} selected={selectedPic} index={2} onClick={() => { clickOfPic(2) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3204.JPG'} width={picWidth} angle={0} selected={selectedPic} index={3} onClick={() => { clickOfPic(3) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3205.JPG'} width={picWidth} angle={0} selected={selectedPic} index={4} onClick={() => { clickOfPic(4) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3206.JPG'} width={picWidth} angle={0} selected={selectedPic} index={5} onClick={() => { clickOfPic(5) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3207.JPG'} width={picWidth} angle={0} selected={selectedPic} index={6} onClick={() => { clickOfPic(6) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3208.JPG'} width={picWidth} angle={0} selected={selectedPic} index={7} onClick={() => { clickOfPic(7) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3209.JPG'} width={picWidth} angle={0} selected={selectedPic} index={8} onClick={() => { clickOfPic(8) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3210.JPG'} width={picWidth} angle={0} selected={selectedPic} index={9} onClick={() => { clickOfPic(9) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3211.JPG'} width={picWidth} angle={0} selected={selectedPic} index={10} onClick={() => { clickOfPic(10) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3201.JPG'} width={picWidth} angle={0} selected={selectedPic} index={11} onClick={() => { clickOfPic(11) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3008.JPG'} width={picWidth} angle={0} selected={selectedPic} index={12} onClick={() => { clickOfPic(12) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3009.JPG'} width={picWidth} angle={0} selected={selectedPic} index={13} onClick={() => { clickOfPic(13) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3010.JPG'} width={picWidth} angle={0} selected={selectedPic} index={14} onClick={() => { clickOfPic(14) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3011.JPG'} width={picWidth} angle={0} selected={selectedPic} index={15} onClick={() => { clickOfPic(15) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3012.JPG'} width={picWidth} angle={0} selected={selectedPic} index={16} onClick={() => { clickOfPic(16) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3013.JPG'} width={picWidth} angle={0} selected={selectedPic} index={17} onClick={() => { clickOfPic(17) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3014.JPG'} width={picWidth} angle={0} selected={selectedPic} index={18} onClick={() => { clickOfPic(18) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3015.JPG'} width={picWidth} angle={0} selected={selectedPic} index={19} onClick={() => { clickOfPic(19) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3016.JPG'} width={picWidth} angle={0} selected={selectedPic} index={20} onClick={() => { clickOfPic(20) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3017.JPG'} width={picWidth} angle={0} selected={selectedPic} index={21} onClick={() => { clickOfPic(21) }}></BackdropImg >
          <BackdropImg img={'src/assets/IMG_3018.JPG'} width={picWidth} angle={0} selected={selectedPic} index={22} onClick={() => { clickOfPic(22) }}></BackdropImg >

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
