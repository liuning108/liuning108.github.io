import styles from  './03.module.sass'
const Page = ()=>{
    return (
        <main className={"min-h-screen  bg-[#222] flex justify-center items-center"}>
            <div className={`w-[50%] h-[300px] relative bg-white ${styles.rect}`}>
                <div className={`w-[50px] h-[50px] bg-red-400 absolute top-[50%] translate-y-[-50%] ${styles.ball}`}></div>

            </div>

        </main>
    )
}
export  default  Page
