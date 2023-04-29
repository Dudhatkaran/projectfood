/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { info, mail, social, listing, member } from 'react'
import style from './About.module.css'
import img1 from "../img/pizza2.jpg"
import img2 from "../img/burger.jpg"
import img3 from "../img/sandwich1.jpg"
import img4 from "../img/french fries.webp"
import img5 from "../img/subway.jpg"
import img6 from "../img/sizler.jpg"

const About = () => {
    return (
        <>
            <div class={ style.teamWrapper }>
                <div class={ style.container }>
                    <h1 align="center">Our Food</h1>
                    <p align="center">Something about our team</p>
                    <div class={ style.teamGrid }>
                        <div class={ style.colmun }>
                            <div class={ style.teamcol }>
                                <div class={ style.teamcolinner }>
                                    <div class={ style.avatar }><img src={ img1 } alt="Member" /></div><br /><br /><br />
                                    <div class={ style.member - name }> <h2 align="center">Pizza
                                    </h2> </div><br />
                                    <div class={ style.member - info }><p align="center">The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town.</p></div>
                                    <div class={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Pizza12@gmail.com</a> </p> </div><br />
                                    <div className={ style.button }><button>Order now</button></div><br />
                                </div>
                            </div>
                        </div>
                        <div class={ style.colmun }>
                            <div class={ style.teamcol }>
                                <div class={ style.teamcolinner }>
                                    <div class={ style.avatar }><img src={ img2 } alt="Member" /></div><br /><br /><br />
                                    <div class={ style.member - name }> <h2 align="center">Burger
                                    </h2> </div><br />
                                    <div class={ style.member - info }><p align="center">A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll.</p></div>
                                    <div class={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Burger12@gmail.com</a> </p> </div><br />
                                    <div className={ style.button }><button>Order now</button></div> <br />
                                </div>
                            </div>
                        </div>
                        <div class={ style.colmun }>
                            <div class={ style.teamcol }>
                                <div class={ style.teamcolinner }>
                                    <div class={ style.avatar }><img src={ img3 } alt="Member" /></div><br /><br /><br />
                                    <div class={ style.member - name }> <h2 align="center">Sendwich
                                    </h2> </div><br />
                                    <div class={ style.member - info }><p align="center">Eating a sandwich every day can certainly fall in line with a healthful, well-rounded diet.</p></div>
                                    <div class={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Sendwich12@gmail.com</a> </p> </div><br />
                                    <div className={ style.button }><button>Order now</button></div><br />
                                </div>
                            </div>
                        </div>
                    </div><br />



                    <div class={ style.teamGrid }>
                        <div class={ style.colmun }>
                            <div class={ style.teamcol }>
                                <div class={ style.teamcolinner }>
                                    <div class={ style.avatar }><img src={ img4 } alt="Member" /></div><br /><br /><br />
                                    <div class={ style.member - name }> <h2 align="center">French-fries
                                    </h2> </div><br />
                                    <div class={ style.member - info }><p align="center">The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town.</p></div>
                                    <div class={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Pizza12@gmail.com</a> </p> </div><br />
                                    <div className={ style.button }><button>Order now</button></div><br />
                                </div>
                            </div>
                        </div>
                        <div class={ style.colmun }>
                            <div class={ style.teamcol }>
                                <div class={ style.teamcolinner }>
                                    <div class={ style.avatar }><img src={ img5 } alt="Member" /></div><br /><br /><br />
                                    <div class={ style.member - name }> <h2 align="center">Subway
                                    </h2> </div><br />
                                    <div class={ style.member - info }><p align="center">Subway was founded by Fred DeLuca and financed by Peter Buck in 1965 as Pete's Super Submarines in Bridgeport.</p></div>
                                    <div class={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Burger12@gmail.com</a> </p> </div><br />
                                    <div className={ style.button }><button>Order now</button></div> <br />
                                </div>
                            </div>
                        </div>
                        <div class={ style.colmun }>
                            <div class={ style.teamcol }>
                                <div class={ style.teamcolinner }>
                                    <div class={ style.avatar }><img src={ img6 } alt="Member" /></div><br /><br /><br />
                                    <div class={ style.member - name }> <h2 align="center">Sizler
                                    </h2> </div><br />
                                    <div class={ style.member - info }><p align="center">A sizzler is a medley dish invented in Mumbai. It is cooked and served on a hot metal plate that is placed.</p></div>
                                    <div class={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Sendwich12@gmail.com</a> </p> </div><br />
                                    <div className={ style.button }><button>Order now</button></div><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About