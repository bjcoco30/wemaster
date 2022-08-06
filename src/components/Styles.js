import styled from "styled-components";
import background from "../assets/indexbck.png";
import { Link } from "react-router-dom";


export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626",
    logocolor: "#002080",
    buttoncolor: "#3b5998",


}

export const StyledContainer = styled.div`
    margin:0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;


`;

export const StyledTitle = styled.div`
    font-size: ${(props) => props.size}px; 
    color: ${(props) => props.color ? props.color: colors.primary};      
    display: flex; 
    flex-direction: row; 
    
`;

export const StyledIntro = styled.h3`
    font-size: ${(props) => props.size}px; 
    color: ${(props) => props.color ? props.color: colors.primary};      
    display: flex; 
    flex-direction: row; 
    
`;

export const StyledLogosText = styled.h2`
    font-size: ${(props) => props.size}px; 
    color: ${(props) => props.color ? props.color: colors.logocolor}; 
    display: flex; 
    flex-direction: row; 
    
`;

export const TextTerms = styled.div`

    font-size: 12px;
    width: 400px;
    color: ${colors.primary};
    margin: 20px 20px;
`;

export const TextList = styled.p`

    font-size: 16px;
    width: 400px;
    color: ${colors.primary};
    margin: 20px 20px;
    font-weight: bolder;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color: colors.red};
    padding: 5px;
    margin-bottom: 25px;
    
`;

export const Avatar = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${props => props.image});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
    
    
`;
export const AvatarLogo = styled.div`
    width: 100%;
    height: 150px;
    background-image: url(${props => props.image});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center; 
    margin-top: -80px;
    
    
`;

export const AvatarLogin = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${props => props.image});
    background-size: 20%;
    background-repeat: no-repeat;
    background-position: center; 
    
    
`;
export const StyledButton = styled(Link)`
    padding: 10px;
    width: 75%;
    background-color: ${colors.buttoncolor};
    font-size: 16px;
    border: none;
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.buttoncolor};
        color: ${colors.primary};
        cursor: pointer;


    }

`;

export const ImageLinked = styled(Link)`
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: ease-in-out 0.3s;


`;

export const ButtonGroup = styled.div`

    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 5px;

`;

export const StyledTextInput = styled.input`

    width: 380px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    outline: 0;
    border: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary}` }
    &:focus{
        background-color: ${colors.light2};
        color: ${colors.theme}; 

    }

    
`;

export const StyledLebel = styled.p`

    text-align: left;
    font-size: 13px;
    font-weight: bold;


`;

export const StyledFormArea = styled.div`

    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 15px 20px;

    

`;

export const StyledFormButton = styled.button`

     
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};  
    cursor: pointer;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;


    }
    

`;

export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 15px;
    ${(props) => props.right && `right: 15px;`};
    ${(props) => !props.right && `left: 15px;`};
        

`;
 

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;
export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;


`;

export const ExtraText = styled.div`
    font-size: ${(props) => props.size}px;
    text-align: left;
    color: ${(props) => (props.color ? props.color: colors.dark2)};
    padding: 2px;
    margin-top: 10px;
    display: flex;
    
    
    

`;


export const TextLink = styled.div`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s; 
    margin-top: 5px;
    margin-left: 15px;  
    
    

`;

export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};

    
    

`;