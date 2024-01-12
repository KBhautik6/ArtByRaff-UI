import styled from "styled-components";

export const StyledSection = styled.div`
  position: fixed;
  left: 15px;
  top: 40%;
  z-index: 4;
`;

export const StyledContainer = styled.ul`
  background: none;
  float: left;
  position: relative;
  margin-left:-36px;

@media screen and (max-width:991px) {
    margin-left:-50px;
}
`;

export const StyledNaviagationBar = styled.li`
  list-style-type: none;
  background-color: #ffffff;
  margin: 6px 0 0 0;

  &::before {
    display: contents;
    content: "";
    display: inline-block;
    width: 0;
    height: 8px;
    padding-top: 20px;
  }
`;

export const StyledWrapperLine = styled.div`
  float: left;
  padding: 0 6px 0 0;
  background-color: #ffffff;
`;

export const StyledLine = styled.a`
  width: 5px;
  border-radius: 0 1px 1px 0;
  background: #dddddd;
`;

export const StyledLinkWrapper = styled.div`
  color: #ffffff; 
  width:5px;
  line-height:1;
  visibility: hidden; 

  @media screen and (max-width:991px){
    width:1px;
  }
`;
