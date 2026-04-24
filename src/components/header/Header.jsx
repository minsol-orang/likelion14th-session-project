import styled from "styled-components";
import logoUrl from "../../assets/images/kream_image.png"
import homeUrl from "../../assets/icons/home_icon.png"
import { useLocation, useNavigate } from "react-router-dom";

const LogoImage = styled.img`
    width : 166px;
    height : 141px;
`;

const HomeImage = styled.img`
    width : 61px;
    height : 24px;
    flex-shrink : 0;
    aspect-ratio : 61/24;
`;

const HeaderContainer = styled.div`
    padding-right : 160px;
    padding-left : 160px;
    display : flex;
    justify-content : space-between;
`;

const Button = styled.div`
    color : #6c6c6c;
    font-size : 13px;
    font-family : Pretendard;
    font-weight : 400;
    margin-top : 9px;
`;

export default function Header(){
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const buttonName = "상품등록";

    return(
        <div>
            <HeaderContainer>
                <LogoImage src={logoUrl}/>
                <div>
                    
                    {pathname === "/" && (
                        <Button onClick={()=>navigate("/add")}>{buttonName}</Button>
                    )}
                    <HomeImage src={homeUrl} />
                </div>
                
            </HeaderContainer>            
        </div>
    );
}