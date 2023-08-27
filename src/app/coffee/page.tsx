'use client'
import styles from './coffee.module.sass'
import Banner from "@/components/banner/Banner";


const Page = () => {
    const  handleBannerOnClick=()=>{
        console.log("handleBannerOnClick")
    }

    return (

            <main className={styles.main}>
                <Banner subTitle={"View stores nearby"} onClick={handleBannerOnClick}/>
            </main>
    )
}
export default Page
