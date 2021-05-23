import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Placeholder from '../images/placeholder.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Vikas Dubey" className="avatar" />
            <t.H1 primary align="center">
              Vikas Dubey
            </t.H1>
            <t.LargeP align="center" max45>
            I’m a fullstack web developer and I always find myself building new things and exploring new technologies, Proficient in developing databases, creating user interfaces, debugging complex/simple issues.
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold className="portfolio">
              Projects
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-c99ad.appspot.com/o/facebook.jpg?alt=media&token=c5ff82bd-9a14-4d30-b050-73db31da3537" alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Facebook Clone</t.H2>
                <t.P>Facebook clone with amazing user interface created by create-react-app, web app with google authentication process.</t.P>
                <t.P>This web app has database and hosting in firebase, It consist of core functionality of creating post with images of all formats and viewing the posts from other users also, User can directly signIn with the google account.</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://facebook-clone-c99ad.web.app/"
                  href="https://facebook-clone-c99ad.web.app/">
                  Live Demo
                </LinkButton>
                <t.P></t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://github.com/SKYLARK-13/Facebook-clone"
                  href="https://github.com/SKYLARK-13/Facebook-clone">
                  Github Code
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>LinkedIn Clone</t.H2>
                <t.P>LinkedIn clone created using react and redux, redux is used to create a data layer around the react.</t.P>
                <t.P>This web app has database and hosting in firebase. It consist of core functionality of creating post and viewing the posts from other users also. User can signIn or signUp with email and password.</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://linkedin-clone-5e3e3.web.app/"
                  href="https://linkedin-clone-5e3e3.web.app/">
                  Live Demo
                </LinkButton>
 <t.P></t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://github.com/SKYLARK-13/LinkedIn-clone"
                  href="https://github.com/SKYLARK-13/LinkedIn-clone">
                  Github Code
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-c99ad.appspot.com/o/linkedin.jpg?alt=media&token=9b7ff7be-0d0e-434e-bb83-1412e38d4786" alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-c99ad.appspot.com/o/venture.jpg?alt=media&token=8acd5b0e-8b74-43a5-b8a6-41aea6acdf81" alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Venture Tshirt Store (MERN)</t.H2>
                <t.P>A Tshirt store developed using MERN stack with Bootstrap 5 have all the basic functionalities like adding product to cart, removing from cart and purchasing.</t.P>
                <t.P>The website has databse in mongodb for users and products, It is full comprised with CRUD operations, The website has admin section which allows admin to perform various operations available. To use website user can simply create account</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://venturetshirt.netlify.app/"
                  href="https://venturetshirt.netlify.app/">
                  Live Demo
                </LinkButton>
<t.P></t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://github.com/SKYLARK-13/venture-mern-client"
                  href="https://github.com/SKYLARK-13/venture-mern-client">
                  Github Code
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Airbnb Clone</t.H2>
                <t.P>Airbnb clone made with React.js, The website is designed by material UI and react components.</t.P>
                <t.P>With search date component and listing of available nearby places this is under developing clone with major completed part of Frontend.</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://airbnb-clone-1fbb3.web.app/"
                  href="https://airbnb-clone-1fbb3.web.app/">
                  Live Demo
                </LinkButton>

<t.P></t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://github.com/SKYLARK-13/airbnb-clone"
                  href="https://github.com/SKYLARK-13/airbnb-clone">
                  Github Code
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-c99ad.appspot.com/o/airbnb.jpg?alt=media&token=4197362c-f01d-4c18-997b-c7d3f0480f7f" alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>
              Fancy working with me? Contact me for more info!{' '}
            </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
