import { useEffect, useState } from "react"
import { Keyboard } from "react-native"


export const useKeyboardStatus = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {

        Keyboard.addListener('keyboardDidShow', ()=>setOpen(true))
        Keyboard.addListener('keyboardDidHide', ()=> setOpen(false))
        return () => {
            Keyboard.removeListener('keyboardDidShow', ()=> setOpen(true))
            Keyboard.removeListener('keyboardDidHide', ()=>setOpen(false))
        }
    }, [])

    return open
}

