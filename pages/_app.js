import '@/styles/globals.css'
import Layout from '@/Components/Base/Layout'
import Loader from '@/Components/Base/Loader'
import { useState ,useEffect} from 'react'
export default function App({ Component, pageProps }) {

  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    setLoading(false)
  },[])
  return(<>
    {loading?<div ><Loader/></div>:<Layout>
      <Component {...pageProps} />
      </Layout>
    }
    </>
    
    
  ) 
  
  
}