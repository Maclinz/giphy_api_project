import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobal } from '../context/global'
import { useTheme } from '../context/themeContext'

const search = <i className="fa-solid fa-magnifying-glass"></i>

function Header({setRendered}) {
    const {searchGiffs} = useGlobal()

    const theme = useTheme()

    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        searchGiffs(query)
        setRendered('search')
        setQuery('')

        if(query === ''){
            setRendered('trending')
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <HeaderStyled theme={theme}>
            <div className="logo">
                <span>Powered by</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164 35" className="Svg-sc-jx1qpn cietHP"><g fillRule="evenodd" clipRule="evenodd"><path fill="#00ff99" d="M0 3h4v29H0z"></path><path fill="#9933ff" d="M24 11h4v21h-4z"></path><path fill="#00ccff" d="M0 31h28v4H0z"></path><path fill="#fff35c" d="M0 0h16v4H0z"></path><path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path><path fill="#121212" opacity="0.4" d="M24 16v-4h4M16 0v4h-4"></path></g><g fill="#ffffff"><path d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3 0-7.1 4.7-14.4 14.9-14.4 3.8 0 7.1.8 10.7 4.4L59.1 12zM68.2 31.2V4h7.6v27.2h-7.6zM88.3 23.8v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9h-5.5zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5v6.7zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2H125zM149.2 13.3l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7l5.5 9.3z"></path></g></svg>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="input-control">
                    <input type="text" value={query} onChange={handleChange}  placeholder="Search for all GIFs"  />
                    <button className="submit-btn">
                        {search}
                    </button>
                </div>
            </form>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    padding: 2rem 22rem;
    background-color: ${(props) => props.theme.colorBg2};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 1300px){
        padding: 2rem 10rem;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        span{
            text-transform: uppercase;
            color: ${(props) => props.theme.colorGrey};
            font-size: .8rem;
        }
        svg{
            width: 10rem;
        }
    }

    form{
        width: 100%;
        .input-control{
            position: relative;
            width: 100%;
            input{
                position: relative;
                z-index: 10;
                width: 100%;
                font-family: inherit;
                font-size: inherit;
                padding: 1rem 2rem;
                outline: none;
                border: none;
                border-radius: 15px;
            }
            &::after{
                content: "";
                position: absolute;
                top: 50%;
                left: -.3rem;
                transform: translateY(-50%);
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%);
                background-size: 400% 400%;
                z-index: 1;
                padding: .3rem;
                transform: scale(0);
                border-radius: 1rem;
                transition: all .3s ease;
                animation: gradient 7s ease-in-out infinite;
                @keyframes gradient{
                    0%{
                        background-position: 0% 50%;
                    }
                    50%{
                        background-position: 100% 50%;
                    }
                    100%{
                        background-position: 0% 50%;
                    }
                }
            }
            &:hover::after, &:focus-within::after{
                transform: scale(1) translateY(-50%);
            }

            .submit-btn{
                position: absolute;
                top: 50%;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateY(-50%);
                border: none;
                outline: none;
                color: ${(props) => props.theme.colorWhite};
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                z-index: 10;
                height: 100%;
                padding: 0 1rem;
                border-radius: 15px;
                background: linear-gradient(to right,
                    ${props => props.theme.colorPurple},
                    ${props => props.theme.colorSalmon}
                );
                background-size: 400% 400%;
                animation: gradient 3s ease-in-out infinite;
                @keyframes gradient{
                    0%{
                        background-position: 0% 50%;
                    }
                    50%{
                        background-position: 100% 50%;
                    }
                    100%{
                        background-position: 0% 50%;
                    }
                }

                i{
                    font-size: 1.8rem;
                    color: white;
                }
            }
        }
    }
`;

export default Header