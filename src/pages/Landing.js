import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledLogosText, AvatarLogo, TextTerms, TextList, StyledIntro} from "../components/Styles";
import Logo from "../assets/welogo.png";
import Logoq from "../assets/wt.png"; 

const Landing = () => {
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "60px", 
                margin: "5px",
                display: "flex",
                justifyContent: "flex-start",


            }}>
                <Avatar image={Logo}/>
            
            </div>
            <div style={{

                marginTop: "-100px",
            }}>
                <StyledTitle size={40}>
                    Welcome to  
                </StyledTitle>
                
                <img src={Logoq}/>
                <StyledIntro size={18}>
                You’ve got the ideas, we’ve got the plans
                </StyledIntro>
                <TextList>
                    &#10003; &nbsp;&nbsp;Send and receive up to 200 GB
                </TextList>
                <TextList>
                    &#10003; &nbsp;&nbsp;1 TB storage per person
                </TextList>
                <TextList>
                    &#10003; &nbsp;&nbsp;Decide when transfers expire
                </TextList> 
                <TextTerms>
                To continue, please agree to our Terms of Service <br />and Cookie Policy. We use cookies for functional and 
                analytical purposes and third party cookies for advertising purposes.
                </TextTerms>
                <ButtonGroup>
                <StyledButton to="/login/">Accept Terms &amp; Conditions</StyledButton> 
            </ButtonGroup>

            
                
            </div> 
            

            
        </div>
    );
}

export default Landing;