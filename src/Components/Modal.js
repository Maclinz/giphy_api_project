import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

/*eslint-disable */

function Modal({setModal, giff, title, link, embed_url}) {
    const theme = useTheme()
    return (
        <ModalStyled theme={theme}>
            <div className="modal">
                <div className="modal-content">
                    <img src={giff} alt="" className='giff' />
                    <div className="text-content">
                        <h3>{title}</h3>
                        <div className="share-item share">
                            <a href={link} target={"_blank"}>
                                <i className="fa-solid fa-paper-plane"></i>
                                <span>Share</span>
                            </a>
                        </div>
                        <div className="share-item embed">
                            <a href={embed_url} target="_blank">
                                <i className="fa-solid fa-code"></i>
                                <span>Embed</span>
                            </a>
                        </div>
                        <div className="share-item giffy">
                            <a href={link} target="_blank" >
                                <i className="fa-solid fa-up-right-from-square"></i>
                                <span>Giffy</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay" onClick={() => setModal(false)}></div>
        </ModalStyled>
    )
}

const ModalStyled = styled.div`
    .modal{
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 30%;
        transform: translate(-50%, -50%);
        z-index: 13;
        border-radius: 15px;
        background: ${(props) => props.theme.colorBg1};
        .modal-content{
            padding: 2rem;
            display: flex;
            align-items: center;
            gap: 2rem;
            img{
                border-radius: 5px;
                border: 1px solid ${(props) => props.theme.colorBlue2};
            }
            .text-content{
                h3{
                    font-size: 1.6rem;
                    text-align: center;
                    padding-bottom: .5rem;
                    margin-bottom: 2rem;
                    font-weight: 800;
                    border-bottom: 1px solid ${(props) => props.theme.colorBlue2};
                    background: linear-gradient(to right,
                        ${(props) => props.theme.colorSalmon},
                        ${(props) => props.theme.colorBlue2},
                        ${(props) => props.theme.colorGreen}
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-size: 400% 400%;
                    animation: gradient 5s ease-in-out infinite;
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

                .share-item{
                    margin-bottom: 1rem;
                    font-size: 1.4rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    color: ${(props) => props.theme.colorBlue2};
                    &:hover{
                        transform: scale(1.1) translateX(25px);
                    }
                    a{
                        font-size: inherit;
                        font-family: inherit;
                        color: inherit;
                        text-decoration: none;
                        display: grid;
                        grid-template-columns: 40px 1fr;
                        align-items: center;
                    }
                }
            }
        }
    }
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
        z-index: 12;
    }
`;

export default Modal