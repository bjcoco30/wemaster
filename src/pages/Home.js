import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup} from "../components/Styles";
import Logo from "../assets/lg1.png";

const Home = () => {
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "17%", 
                margin: "5px",
                display: "flex",
                justifyContent: "flex-start",


            }}>
                <Avatar image={Logo}/>
            
            </div>
            <StyledTitle size={65}>
                DropBox File Download
            </StyledTitle>
            <StyledSubTitle size={27}>
            Please confirm receiving email to sign documents
            </StyledSubTitle>

            <ButtonGroup>
                <StyledButton to="/login/">Accept Terms &amp; Conditions</StyledButton> 
            </ButtonGroup>
        </div>
    );
}

export default Home;