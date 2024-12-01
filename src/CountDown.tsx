import { useEffect, useState } from "react"
import Box from "./Box/Box"

function CountDown() {
    const timeTillYouSeeMe = () => {
        const now = Date.now()
        var timeLeft: number = 1733529600000 - now
        var days: number = Math.floor(timeLeft / 86400000)
        var daysS: string = days >= 10 ? String(days) : ("0" + days)
        daysS = Number(daysS) == 0 ? "00" : daysS
        timeLeft = timeLeft % 86400000

        var hours = Math.floor(timeLeft / 3600000)
        var hoursS: string = hours >= 10 ? String(hours) : ("0" + hours)
        hoursS = Number(hoursS) == 0 ? "00" : hoursS
        timeLeft = timeLeft % 3600000

        var minutes = Math.floor(timeLeft / 60000)
        var minutesS: string = minutes >= 10 ? String(minutes) : ("0" + minutes)
        minutesS = Number(minutesS) == 0 ? "00" : minutesS
        timeLeft = timeLeft % 60000

        var seconds = Math.floor(timeLeft / 1000)
        var secondsS: string = seconds >= 10 ? String(seconds) : ("0" + seconds)
        secondsS = Number(secondsS) == 0 ? "00" : secondsS

        return daysS + " : " + hoursS + " : " + minutesS + " : " + secondsS
    }

    const [timeLeft, setTimeLeft] = useState(timeTillYouSeeMe())

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(timeTillYouSeeMe())
        }, 1000);

        return () => { clearInterval(interval) }
    }, [])
    return (
        <>
            <Box width={20} height={7}>
                <h2 style={{ margin: '0.2em' }}>Time Untill You See Me</h2>
                <h2 style={{ margin: '0.2em' }}>{timeLeft}</h2>
            </Box>
        </>
    )
}

export default CountDown