import styles,{ layout} from "../style"
import Button from "./Buttton"
import FeatureCard from "./FeatureCard"
import {star,shield,send} from "../assets"

interface features {
    id:string,
    icon:string,
    title:string,
    content:string
}

const Business = () => {
    const items:features[] = [
        {
          id: "feature-1",
          icon: star,
          title: "Rewards",
          content:
            "The best credit cards offer some tantalizing combinations of promotions and prizes",
        },
        {
          id: "feature-2",
          icon: shield,
          title: "100% Secured",
          content:
            "We take proactive steps make sure your information and transactions are secure.",
        },
        {
          id: "feature-3",
          icon: send,
          title: "Balance Transfer",
          content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
        },
      ];
    
    return(
        <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
      {items.map((feature,index)=>(
        <FeatureCard key={feature.id} {...feature} index={index} length={items.length}/>
      ))}

      </div>
    </section>
    )
}

export default Business