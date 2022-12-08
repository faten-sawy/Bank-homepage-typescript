import styles from "../style"
import {airbnb,binance,coinbase,dropbox} from "../assets"

interface clients {
    id:string,
    logo:string
}
const Clients = () =>{

    const  items:clients[] = [
        {
          id: "client-1",
          logo: airbnb,
        },
        {
          id: "client-2",
          logo: binance,
        },
        {
          id: "client-3",
          logo: coinbase,
        },
        {
          id: "client-4",
          logo: dropbox,
        },
      ];
    return(
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {items.map((client)=>(
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                <img src={client.logo} alt="logo" className=" sm:w-[192px] py-4 w-[100px] object-contain"/>
                </div>
            ))}
            </div>
        </section>
    )
}
export default Clients