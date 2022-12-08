import styles from "../style"
import { logo,instagram,facebook,twitter,linkedin } from "../assets"

interface LinksFooter {
    title:string,
    id:number,
    links:{
        name:string,
        link:string
    }[]

}

interface SocialMediaItems {
    id:string,
    icon:string,
    link:string
}
const Footer =()=>{

    const socialMedia:SocialMediaItems[] = [
        {
          id: "social-media-1",
          icon: instagram,
          link: "https://www.instagram.com/",
        },
        {
          id: "social-media-2",
          icon: facebook,
          link: "https://www.facebook.com/",
        },
        {
          id: "social-media-3",
          icon: twitter,
          link: "https://www.twitter.com/",
        },
        {
          id: "social-media-4",
          icon: linkedin,
          link: "https://www.linkedin.com/",
        },
      ];
      

    const footerLinks:LinksFooter[] = [
        {
          title: "Useful Links",
          id:1,
          links: [
            {
              name: "Content",
              link: "https://www.hoobank.com/content/",
            },
            {
              name: "How it Works",
              link: "https://www.hoobank.com/how-it-works/",
            },
            {
              name: "Create",
              link: "https://www.hoobank.com/create/",
            },
            {
              name: "Explore",
              link: "https://www.hoobank.com/explore/",
            },
            {
              name: "Terms & Services",
              link: "https://www.hoobank.com/terms-and-services/",
            },
          ],
        },
        {
          title: "Community",
          id:2,
          links: [
            {
              name: "Help Center",
              link: "https://www.hoobank.com/help-center/",
            },
            {
              name: "Partners",
              link: "https://www.hoobank.com/partners/",
            },
            {
              name: "Suggestions",
              link: "https://www.hoobank.com/suggestions/",
            },
            {
              name: "Blog",
              link: "https://www.hoobank.com/blog/",
            },
            {
              name: "Newsletters",
              link: "https://www.hoobank.com/newsletters/",
            },
          ],
        },
        {
          title: "Partner",
          id:3,
          links: [
            {
              name: "Our Partner",
              link: "https://www.hoobank.com/our-partner/",
            },
            {
              name: "Become a Partner",
              link: "https://www.hoobank.com/become-a-partner/",
            },
          ],
        },
      ];
    return(
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              key={link.id}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins 
                font-normal text-[16px] leading-[24px] text-dimWhite
                 hover:text-secondary cursor-pointer
                 ${index !== link.links.length - 1 ? "mb-4" : "mb-0"}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full flex justify-between items-center md:flex-row 
        flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"
      >
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    )
}
export default Footer