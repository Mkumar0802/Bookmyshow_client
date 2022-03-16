import SocialLinks from "../components/SocialLinks";
import Supportlinks from "./Supportlinks";
import Partnerlink from "./Partnerlink"
function Footer() {


    return (
        
            <div className="relative ">
                <Partnerlink/>
                <Supportlinks />
                <div className="bg-slate-700 text-white      py-20 text-center ">
                    <h1 className="text-white text-xl font-mono " >

                        Book<span className="text-red-600">my</span>show
                    </h1>
                    <SocialLinks alignment="center" /> 

                    <div className="my-5 md:text-xl ">
                        <p>
                            Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research. Fair use is a use permitted by copyright statute that might otherwise be infringing.
                        </p>
                        <p> Copyright @{(new Date().getFullYear())} </p>

                    </div>

                    <p>
                Made by Muthukumar
            </p>
            <p>
                Using React,Tailwind CSS
            </p>

                </div>
               
                
               
            </div>

           
            
        

    )
}




export default Footer;