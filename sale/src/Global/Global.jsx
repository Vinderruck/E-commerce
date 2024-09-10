import { createContext,useState} from "react";

const Appcontext = createContext();

const ThemeColor = ({children}) =>{
    const [mood, setmood] = useState( 'light');

//Code handling mood change
    const handlethemechange = ()=>{
        setmood( mood ==='light' ? 'dark' : 'light')
        localStorage.setItem("mood",mood)
    }
     
    
     
  
      
   
     
    return (
        <Appcontext.Provider value={{mood,handlethemechange }}>
            {children}
        </Appcontext.Provider>
        )}
        export { ThemeColor, Appcontext}
    