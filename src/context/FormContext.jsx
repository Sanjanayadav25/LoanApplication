import { createContext, useContext , useEffect, useState} from "react"

export const FormContext = createContext()


export const FormProvider = ({children})=>{
  
    const [FormData , setFormData] = useState(()=>{
        const savedData = localStorage.getItem("loanForm")

        return savedData? JSON.parse(savedData):{}
    })

     useEffect(()=>{
    localStorage.setItem("loanForm" , JSON.stringify(FormData))
     },[FormData]) 


   return (
    < FormContext.Provider value = {{ FormData , setFormData}} >
        { children}
    </FormContext.Provider>
   )
}
