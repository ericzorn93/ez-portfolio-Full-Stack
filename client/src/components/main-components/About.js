import React, { Component } from 'react';
import DanKitchenProfilePicture from '../../assets/img/Dan_Kitchen.jpg';

export default class About extends Component {
  render() {
    return (
      <div className={"container"}>
        <h1 className={"text-center"}>Daniel James Kitchen</h1>
        <br/>
        <div className="text-center">
            <img src={DanKitchenProfilePicture} alt="Daniel Kitchen Profile Picture"/>
        </div>
        <hr/>
        <h5><strong>Branded Entertainment</strong></h5>
        <h5><strong>INTERACTIVE NEW MEDIA • LICENSING</strong></h5>
        <h5><strong>BUSINESS DEVELOPMENT • GAME DESIGN</strong></h5>
        <hr/>
        <p>
            Daniel Kitchen is an accomplished, results-driven, recognized software industry pioneer with over 10 years of
            combined management and design experience creating, marketing, and distributing branded entertainment software
            generating over $100M in revenues. He is a highly creative “out-of-the-box" executive who facilitates the global
            expansion of intellectual properties by creating long-term partnerships between entertainment brand owners and
            interactive companies.
        </p>
        <p>
            With a proven ability to identify, develop, and implement strategies which achieve tangible results, Dan has
            extensive experience expanding markets, generating new revenue streams, managing brand expansion campaigns,
            and leveraging a global network of strategic partners while delivering superior client service.
        </p>
        <p>
            Throughout his career, Dan has created/produced over 200+ interactive software titles, has served on the Society
            of Industry Leaders, and is a recognized expert witness in the gaming industry. He has been represented by Creative
            Artists Agency (CAA) talent and literary agency, and was a technical consultant for Sony Pictures / Happy Madison’s
            Grandma’s Boy Feature Film.
        </p>
        <h5>Product Development</h5>
        <p>
            Throughout his career Dan has designed and produced hundreds of games while managing 50-100 person internal/external creative and technical teams.
        </p>
        <h5>Product Design</h5>
        <p>
            Dan has extensive experience designing interactive game and entertainment content for a variety of genres across numerous gaming and delivery platforms.
        </p>
        <h5>Business Development</h5>
        <p>
            Throughout his years in the interactive industry, Dan has proven the ability to identify frontline and niche
            brands that can be leveraged into products generating millions in bottom-line revenues. His extensive understanding
            of business planning, P&amp;L analysis, and integrated viral and social-network marketing gives him unique insight
            into both the agency and client side of the interactive industry.
        </p>
        <h5>Licensing</h5>
        <p>
            Throughout his career, Dan has developed relationships with A-List brands and Hollywood studios, agents and talent.
        </p>
        <h5>Expert Witness</h5>
        <p>
            Dan is an experienced Expert Witness/Consultant for the interactive software industry with expertise in the following areas:
        </p>
        <ul>
            <li>Video Game Design and Development</li>
            <li>Video Game Distribution, Licensing, and Product Evaluation</li>
            <li>General Software Development</li>
        </ul>
      </div>
    )
  }
}
