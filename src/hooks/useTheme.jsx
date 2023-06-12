import { useEffect, useState } from "react"

const useTheme=()=>{
    const [theme,setTheme]=useState(JSON.parse(localStorage.getItem('dance-flow-theme')));


    useEffect(()=>{
        
       
        theme? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

        localStorage.setItem('dance-flow-theme',theme)

    },[theme])


    return [theme,setTheme];

}

export default useTheme;