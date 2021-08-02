import * as React from "react"
import "../styles/styles.scss"
import "../styles/normalize.css"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="wrapper">
    <StaticImage
      src="../images/noah.png"
      className="image"
      width={40}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Profile picture"
    />
    <div className="container">
      <h1 className="name">Noah Schick</h1>
      <h1>front-end developer</h1>
      <p className="subcontent">The iceman cometh... You killed my fada... My nipples are very sensitive. You should not drink and bake... Freeze in hell batman! Kill me (wealthy)! Hasta la vista baby.</p>
      <p className="subcontent">You should not drink and bake... Freeze in hell batman! Kill me! Hasta la vista baby. Get to the choppa.</p>
      <div className="socials">
        <p>— Get in touch</p>
        <a className="github" href="https://github.com/NoahSchick">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M7.77656 18.6281C7.77656 18.7219 7.66875 18.7969 7.53281 18.7969C7.37812 18.8109 7.27031 18.7359 7.27031 18.6281C7.27031 18.5344 7.37813 18.4594 7.51406 18.4594C7.65469 18.4453 7.77656 18.5203 7.77656 18.6281ZM6.31875 18.4172C6.28594 18.5109 6.37969 18.6187 6.52031 18.6469C6.64219 18.6937 6.78281 18.6469 6.81094 18.5531C6.83906 18.4594 6.75 18.3516 6.60938 18.3094C6.4875 18.2766 6.35156 18.3234 6.31875 18.4172ZM8.39062 18.3375C8.25469 18.3703 8.16094 18.4594 8.175 18.5672C8.18906 18.6609 8.31094 18.7219 8.45156 18.6891C8.5875 18.6562 8.68125 18.5672 8.66719 18.4734C8.65312 18.3844 8.52656 18.3234 8.39062 18.3375ZM11.475 0.375C4.97344 0.375 0 5.31094 0 11.8125C0 17.0109 3.27188 21.4594 7.94531 23.025C8.54531 23.1328 8.75625 22.7625 8.75625 22.4578C8.75625 22.1672 8.74219 20.5641 8.74219 19.5797C8.74219 19.5797 5.46094 20.2828 4.77188 18.1828C4.77188 18.1828 4.2375 16.8187 3.46875 16.4672C3.46875 16.4672 2.39531 15.7312 3.54375 15.7453C3.54375 15.7453 4.71094 15.8391 5.35312 16.9547C6.37969 18.7641 8.1 18.2437 8.77031 17.9344C8.87813 17.1844 9.18281 16.6641 9.52031 16.3547C6.9 16.0641 4.25625 15.6844 4.25625 11.175C4.25625 9.88594 4.6125 9.23906 5.3625 8.41406C5.24062 8.10938 4.84219 6.85312 5.48438 5.23125C6.46406 4.92656 8.71875 6.49688 8.71875 6.49688C9.65625 6.23438 10.6641 6.09844 11.6625 6.09844C12.6609 6.09844 13.6688 6.23438 14.6063 6.49688C14.6063 6.49688 16.8609 4.92188 17.8406 5.23125C18.4828 6.85781 18.0844 8.10938 17.9625 8.41406C18.7125 9.24375 19.1719 9.89062 19.1719 11.175C19.1719 15.6984 16.4109 16.0594 13.7906 16.3547C14.2219 16.725 14.5875 17.4281 14.5875 18.5297C14.5875 20.1094 14.5734 22.0641 14.5734 22.4484C14.5734 22.7531 14.7891 23.1234 15.3844 23.0156C20.0719 21.4594 23.25 17.0109 23.25 11.8125C23.25 5.31094 17.9766 0.375 11.475 0.375ZM4.55625 16.5422C4.49531 16.5891 4.50938 16.6969 4.58906 16.7859C4.66406 16.8609 4.77187 16.8938 4.83281 16.8328C4.89375 16.7859 4.87969 16.6781 4.8 16.5891C4.725 16.5141 4.61719 16.4812 4.55625 16.5422ZM4.05 16.1625C4.01719 16.2234 4.06406 16.2984 4.15781 16.3453C4.23281 16.3922 4.32656 16.3781 4.35938 16.3125C4.39219 16.2516 4.34531 16.1766 4.25156 16.1297C4.15781 16.1016 4.08281 16.1156 4.05 16.1625ZM5.56875 17.8312C5.49375 17.8922 5.52187 18.0328 5.62969 18.1219C5.7375 18.2297 5.87344 18.2437 5.93437 18.1688C5.99531 18.1078 5.96719 17.9672 5.87344 17.8781C5.77031 17.7703 5.62969 17.7563 5.56875 17.8312ZM5.03438 17.1422C4.95937 17.1891 4.95937 17.3109 5.03438 17.4188C5.10938 17.5266 5.23594 17.5734 5.29688 17.5266C5.37187 17.4656 5.37187 17.3438 5.29688 17.2359C5.23125 17.1281 5.10938 17.0813 5.03438 17.1422Z" fill="white" fill-opacity="0.6"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="23.25" height="24" fill="white"/>
            </clipPath>
          </defs>
          </svg>
        </a>
        <a className="twitter" href="https://twitter.com/NoahSchick7">
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M21.783 7.11169C21.7982 7.32488 21.7982 7.53811 21.7982 7.7513C21.7982 14.2538 16.849 21.7462 7.8033 21.7462C5.01648 21.7462 2.42767 20.9391 0.25 19.5381C0.645953 19.5838 1.02662 19.599 1.43781 19.599C3.73727 19.599 5.85405 18.8224 7.54441 17.4975C5.38197 17.4518 3.56978 16.0356 2.94541 14.0863C3.25 14.132 3.55455 14.1624 3.87437 14.1624C4.31598 14.1624 4.75764 14.1015 5.16878 13.995C2.91498 13.5381 1.22458 11.5584 1.22458 9.16753V9.10664C1.87937 9.47213 2.64086 9.70055 3.44791 9.73097C2.12303 8.84771 1.25505 7.34011 1.25505 5.63452C1.25505 4.72083 1.49866 3.88327 1.92508 3.1523C4.34641 6.13706 7.98602 8.08627 12.0672 8.2995C11.9911 7.93402 11.9454 7.55335 11.9454 7.17263C11.9454 4.46194 14.1383 2.25385 16.8641 2.25385C18.2804 2.25385 19.5595 2.84775 20.458 3.80714C21.5697 3.59395 22.6357 3.18277 23.5799 2.61933C23.2143 3.76149 22.4377 4.72088 21.4174 5.32997C22.4073 5.22342 23.3667 4.94925 24.2499 4.56858C23.58 5.54316 22.7424 6.41114 21.783 7.11169Z" fill="white" fill-opacity="0.6"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" transform="translate(0.25)"/>
            </clipPath>
          </defs>
          </svg>
        </a>
      </div>
    </div>
  </div>

)

export default IndexPage
