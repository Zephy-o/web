import * as React from "react"
import TestimonialComponent from "../components/testimonial"
import { RouteComponentProps } from "@reach/router"
import NewsReel from "../components/newsreel"
import { FooterComponent } from "../components/footer"
import { Helmet } from "react-helmet";
import { Button, Size, Type} from "../components/base/button"
import Navbar from "../components/navbar"

export default class Home extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Helmet>
        <title>Miki - The Discord bot!</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=no" />
          <meta name="description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Miki - The Discord Bot" />
          <meta property="og:description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
        </Helmet>

        <Navbar/>
          <div className="hero is-textured">
            <div className="container hero-body">
              <h1 className="title has-text-light"> Legal </h1>
              <p className="description has-text-light"> Miki Terms of Service and Privacy Policy </p>
            </div>
          </div>
          <div className="container content section">
          <h2> Miki Terms of Service </h2>
          <hr/>
          <h3> 1. Use of Miki </h3>
          <p> 
            By inviting Miki to your Discord server you and your members grant Miki to store the following information about you:
            <ol type="a">
              <li> Your Discord user ID </li>
              <li> Your Discord username </li>
              <li> Your Discord avatar </li>
            </ol>
          </p>
          <p> Miki will not automatically store other information. In the event you use a command to store extra data. You will approve of it by 
              typing it in a command. These are used to identify you and give you access to the Miki infrastructure. </p>
          <ol>
            <h4> 1.2 Liability </h4>
            <p> We are in no way liable of potential data loss. In the case we make a major data loss, we will post a announcement in our Discord 
              server. Retrieval of data is only redeemable if you have the following evidence;</p>
            <ol type="a">
              <li> A recent screen capture (unedited). </li>
            </ol>
            <p> In the event of doubt of legitimacy we may ask for an invite of the destination of the message to verify legitimacy. In the event of 
              the end user declining such request, the end user will not compensated. </p>

            <h4> 1.3 Tracking </h4>
            <p> Miki does not track any sensitive data, and no chat logs will be saved. We value your privacy. In events you break any of the general 
              guidelines (see 2.1 cheating) tracking may be applied to make sure you will not and shall not damage our platform.</p>
          </ol>
          <h3> 2. Cheating </h3>
          <p> We do not condone of abusing and using general cheats, hacks, bots and abusing. This includes but does not limit to:</p>
          <ol type="a">
            <li> Using “self bots” to farm currency, experience and achievements.</li>
            <li> Abusing new glitches to personally gain from it.</li>
            <li> Abusing our open source platform to exploit systems.</li>
          </ol>
          <h3> 3. Self-hosting </h3>
          <p> Miki is a open sourced bot. This means our platform can be reused without any issue, however. You can not claim ownership of the software. 
            In the event you do not oblige with giving credit to us. We will be able to cease and desist your platform. </p>
          <ol>
            <h4> 3.2 Support </h4>
            <p> We do not support setting up Miki as a external service. And it is not our priority nor is it our goal to spread the bot over several 
              external services. The code is open sourced purely for educational purposes. </p>
          </ol>
          <h2> Miki.ai Terms of Service </h2>
          <hr/>
          <h3> 1. Terms</h3>
          <p> By accessing the website at 
            <a href="http://miki.ai"> http://miki.ai </a> , you are agreeing to be bound by these terms of service, all applicable laws and regulations, 
            and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited 
            from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
          <h3> 2. Use License</h3>
          <ol type="a">
            <li> Permission is granted to temporarily download one copy of the materials (information or software) on Miki's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: </li>
              <ol type="i">
                <li> modify or copy the materials;</li>
                <li> use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li> attempt to decompile or reverse engineer any software contained on Miki's website;</li>
                <li> remove any copyright or other proprietary notations from the materials; or</li>
                <li> transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ol>
            <li>  This license shall automatically terminate if you violate any of these restrictions and may be terminated by Miki at any time. Upon 
              terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession 
              whether in electronic or printed format. </li>
          </ol>
          <h3> 3. Disclaimer</h3>
          <ol type="a">
            <li> The materials on Miki's website are provided on an 'as is' basis. Miki makes no warranties, expressed or implied, and hereby disclaims and 
              negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or 
              non-infringement of intellectual property or other violation of rights. </li>
            <li> Further, Miki does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its 
              website or otherwise relating to such materials or on any sites linked to this site.</li>
          </ol>
          <h3> 4. Limitations</h3>
          <p> In no event shall Miki or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business 
            interruption) arising out of the use or inability to use the materials on Miki's website, even if Miki or a Miki authorized representative has been notified 
            orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability 
            for consequential or incidental damages, these limitations may not apply to you. </p>
          <h3> 5. Accuracy of materials</h3>
          <p> The materials appearing on Miki website could include technical, typographical, or photographic errors. Miki does not warrant that any of the materials on 
          its website are accurate, complete or current. Miki may make changes to the materials contained on its website at any time without notice. However Miki does 
          not make any commitment to update the materials. </p>
          <h3> 6. Links</h3>
          <p> Miki has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link 
            does not imply endorsement by Miki of the site. Use of any such linked website is at the user's own risk. </p>
          <h3> 7. Modifications</h3>
          <p> Miki may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current 
              version of these terms of service. </p>
          <h3>8. Governing Law</h3>
          <p> These terms and conditions are governed by and construed in accordance with the laws of Netherlands and you irrevocably submit to the exclusive jurisdiction 
              of the courts in that State or location. </p>
          </div>
        <FooterComponent />
      </div>
    )
  }
}