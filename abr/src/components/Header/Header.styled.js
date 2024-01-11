import styled from "styled-components";
export const StyledSection = styled.section`
  padding: 0;
`;

export const StyledWrapper = styled.div`
  margin: 0;
`;

export const StyledHeaderDrag = styled.div`
  width: 100%;

  &::before {
    display: table;
    content: "";
  }
`;

export const StyledInner = styled.div`
  width: 100%;
  height: 100%;
  height: 771px;
  outline: none;
`;

export const StyledBanner = styled.div`
  background: url(https://artbyraff.com/wp-content/uploads/2021/03/820870D6-04C6-4081-B048-A2B6C3FBAE51.jpg)
    center/cover;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 991px) {
    background-size: cover;
    background-position: center;
  }
`;

export const StyledAboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 773px;
`;

export const StyledAbout = styled.a`
  font-family: "Graphik-Black";
  max-width: 37px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.31;
  color: #ffffff;
  text-decoration: none; /* Remove underline */
  border: 1px solid #fff;
  border-radius: 25px;
  padding: 22px 96px;
`;
