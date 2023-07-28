import React from 'react'
import styles from "../styles/Products.module.css"
import PageHeading from './Base/PageHeading'

const Metarials = ({data}) => {
  console.log(data,"data")

  var data_key=Object.keys(data.content)
  return (
    <>
   <PageHeading heading={data.heading} img={data.img} bredcurm={data.Bredcurm} />
 

    <div className={styles.materials_content }>
     <h2>{data.heading}</h2>
     {
      data_key.map((item,i)=>{
        return(
          <p key={i}>{data.content[item]}</p>
        )
      })
     }

    </div>
    </>
  )
}

export default Metarials