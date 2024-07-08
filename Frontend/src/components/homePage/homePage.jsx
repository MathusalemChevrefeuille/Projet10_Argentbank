import Banner from "./banner";
import icon_chat from "../../assets/icon-chat.webp"
import icon_money from "../../assets/icon-money.webp"
import icon_security from "../../assets/icon-security.webp"


function HomePage(){
    return(
        <div>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className={"features"}>
                <Banner image={icon_chat} title={"You are our #1 priority"} text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} />
                <Banner image={icon_money} title={"More savings means higher rates"} text={"The more you save with us, the higher your interest rate will be!"} />
                <Banner image={icon_security} title={"Security you can trust"} text={"We use top of the line encryption to make sure your data and money is always safe."} />
            </section>
        </div>
    )
}

export default HomePage