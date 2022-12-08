
import styles from "../style"

interface stats {
    id:string,
    title:string,
    value:string
}

const Stats = () =>{

    const items:stats[] = [
        {
          id: "stats-1",
          title: "User Active",
          value: "3800+",
        },
        {
          id: "stats-2",
          title: "Trusted by Company",
          value: "230+",
        },
        {
          id: "stats-3",
          title: "Transaction",
          value: "$230M+",
        },
      ];
  
    return(
        <section
      className={`${styles.flexCenter} flex-row justify-start flex-wrap sm:mb-20 mb-6 xl:p-0`}
    >
      {items.map((state) => (
        <div key={state.id} className="flex-1 flex justify-start items-center flex-row m-3">
          <h4 className="font-poppins font-semibold text-[40px]  xs:leading-[53px] leading-[43px] text-white">
            {state.value}
          </h4>
          <p className="font-poppins font-normal text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {state.title}
          </p>
        </div>
      ))}
    </section>
    )
}

export default Stats