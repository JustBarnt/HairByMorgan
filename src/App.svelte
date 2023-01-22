<script lang="ts">
    import StandardPhotos from "./components/standardPhotos.svelte";
    import WeddingPhotos from "./components/weddingPhotos.svelte";
    import { images, weddingImages } from "./imageSource";
        
</script>

<header>
    <content class="logo">
        <div class="border-box">
            <p>Hair By Morgan</p>
        </div>
    </content>
    <nav>
        <ul class="navigation">
            <li class="nav-item button"> <a href="#About">
                About Me
            </a>
            </li>
                <li class="nav-item button"> <a href="#Work">
                    My Work
                </a>
            </li>
                <li class="nav-item button"> <a href="#Contact">
                    Contact Me
                </a>
            </li>
        </ul>
</header>

<main>
    <content class="main">
        <section class="about-me" id="About">
            <div class="about-me-items">
                <img src="../about-me-photos/morgan_headshot.jpg" alt="Morgan Gebhart">
                <article class="text">
                    <p class="about-me-image-name">Morgan Gebhart</p>
                    <h2 class="about-me-head">Welcome</h2>
                    <p class="about-me-bio">
                    If you are interested in a new look or just a touch up, you've come to the right place! I love to help clients find what they're looking for.
                    Wedding hair is another of my passions. There is no better feeling than to help someone look their best on such an important day. If you would like a wedding hair consultation, please visit my contact page and send me an email.
                    
                    Keep up with my latest services by visiting the social links below.
                    </p>
                </article>
            </div>
        </section>
        <section class="my-work" id="Work">
            <article class="instructions">
                <h2 class="article-title">My Work:</h2>
                <p class="article-copy">Here are some of examples of work I have done, you can click the tab to switch between standard hair styles or wedding hair styles.</p>
            </article>

            <div>
                <h3>Standard Hair</h3>
                <StandardPhotos {images} />
            </div>

            <div>
                <h3>Wedding Hair</h3>
                <WeddingPhotos {weddingImages} />
           
        </section>
        <section class="contact-me" id="Contact">
            <article class="instructions">
                <h2 class="article-title">Contact Me:</h2>
                <p class="article-copy">Fill out the form below to reach out to me to get an appointment scheduled!</p>
            </article>
            <form action="mailto:morganlynnmach@gmail.com" method="post" enctype="" name="contact-form" class="contact-form">
                <label class="label-name" for="name">Name</label>
                <input class="input-name"type="text" name="name" id="name" placeholder="Name" required>
                <label class="label-email" for="email">Email</label>
                <input class="input-email"type="email" name="email" id="email" placeholder="Email" required>
                <label class="label-message" for="message">Message</label>
                <textarea class="input-message" name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
                <input class="submit" type="submit" value="Submit">
            </form>
        </section>
    </content>
</main>

<footer>
    <p class="footer">HairByMorgan owned by Morgan Gebhart ©{new Date().getFullYear()}</p>
    <section class="sitemap">
        <p class="button">About Me</p>
        <p class="button">My Work</p>
        <p class="button">Contact Me</p>
    </section>
</footer>

<style lang="scss">
    header{
        position: sticky;
        z-index: 9999;
        top: 0;
        height: fit-content;
        grid-area: a;
        display: grid;
        justify-content: space-between;
        padding: 1rem;
        align-items: center;
        grid-auto-flow: column;
        border-bottom: 0.35rem solid rgb(245, 245, 245);
        background: $main-pink;
        
        .logo{
            align-self: center;
        }

        .border-box{
            cursor: default;
            font-size: 2rem;
            font-family: $logo-font;
            line-height: 18px;
            border: 0.35rem solid;
            width: fit-content;
            padding: 1rem 2rem;
            border-radius: $bRadius;

            p{
                text-align: justify;
                text-justify: distribute;
            }
        }

        .navigation{
            display: flex;
            text-decoration: none;
            list-style: none;
            font-size: 1.4rem;
            flex-flow: row wrap;
            gap: 1rem;

            li{
                text-align: center;
                @extend %button;
                font-weight: bold;
                a{
                    text-decoration: none;
                    color: $font-color;
                }
            }
        }
    }

    main{
        grid-area: b;

        display: grid;

        content{
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 4rem;

            section{
                width: 95%;
                row-gap: 4rem;

                article{
                    display: flex;
                    row-gap: 2rem;
                    flex-flow: column;
                    padding: 1rem;
                    text-align: center;
                    h2{
                        font-size: 2rem;
                    }
                    p{
                        font-size: 1.4rem;
                    }
                }
            }

            .about-me{
                display: flex;
                
                .about-me-items{
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
    
                    img{
                        max-width: 420px;
                        height: auto;
                        object-fit: cover;
                        border-radius: $bRadius;
                    }
    
                    article{
                        display: flex;
                        flex-flow: column wrap;
                        justify-content: center;
                        align-items: center;
                        gap: 2rem;
                        padding: 1rem;
    
                        .about-me-image-name{
                            font-size: 3rem;
                            font-family: $logo-font;
                            text-align: center;
                        }
        
                        .about-me-head{
                            font-size: 2rem;
                            font-weight: bold;
                            text-align: center;
                        }
        
                        .about-me-bio{
                            width: 50%;
                            line-height: 1.5em;
                            font-size: 1.4rem;
                            text-align: center;
                        }
                    }
    
                }
            }

            .my-work{
                display: flex;
                flex-flow: column;
                align-content: center;

                div{
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    h3{
                        font-size: 2rem;
                        text-align: center;
                        text-decoration: underline; 
                    }
                }
            }


            .contact-me{
                display:flex;
                align-items: center;
                flex-flow: column;
                .contact-form{
                    display: grid;
                    align-content: center;
                    justify-content: center;
                    gap: 1rem;
                    padding: 1rem;
    
                    label{
                        text-align: left;
                        font-size: 1.4rem;
                        font-weight: bold;
                    }
    
                    input{
                        padding: 1rem;
                        border: 0.35rem solid rgb(245, 245, 245);
                        border-radius: $bRadius;
                        font-size: 1.4rem;
                    }
    
                    .input-name{
                        grid-area: 2/1/2/1;
                    }
    
                    .input-email{
                        grid-area: 2/2/2/2;
                    }
                    .input-message{
                        resize: none;
                    }
    
                    .label-name{
                        grid-area: 1/1/1/1;
                    }
                    
                    .label-email{
                        grid-area: 1/2/1/2;
                    }
    
                    .label-message{
                        grid-area: 3/1/3/1;
                    }
    
    
                    textarea{
                        grid-area: 4/1/4/3;
                        padding: 1rem;
                        border: 0.35rem solid rgb(245, 245, 245);
                        border-radius: $bRadius;
                        font-size: 1.4rem;
                    }
    
                    input[type="submit"]{
                        grid-area: 5/1/5/3;
                        @extend %button;
                        background: $main-pink;
                        font-size: 1.4rem;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    footer{
        grid-area: c;

        border-top: 0.35rem solid rgb(250, 187, 198);
        padding: 1rem 0rem;
        .footer{
            font-size: 1.2rem;
            text-align: center;
        }

        .sitemap{
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
            
            p{
                @extend %footer-button;
            }
        }
    }

    //Media Query for Mobile Menu switch
    @media screen and (max-width: 600px){

#app{
    height: 100vh;
    display: flex;
    overflow-y: auto;
    width: fit-content;
    overflow-x: hidden !important;
    flex-direction: row;
    flex-wrap: wrap;
}

header{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100vw;

    .logo{
        width: fit-content;

        .border-box{
            font-size: 4rem;
            padding: 3rem 2rem
        }
    }

    nav{
        display: flex;
        width: fit-content;
    }
}

#gallery{
    .column{
        display: flex !important;
        flex-flow: row wrap !important;
        column-gap: 5px !important;
        justify-content: center !important;
        
        img{
            width: 50% !important;
            max-width: 420px !important;
            height: auto !important;
            object-fit: cover !important;
            border-radius: .25rem !important;
            flex-basis: 49% !important;
        }
    }
}

main{
    width: fit-content;
    display: flex;

    .main{
        display: flex;
        flex-flow: row wrap;
        gap: 4rem;
        width: fit-content;

        .about-me{
            display: flex;
            width: auto;
            row-gap: 4rem;

            .about-me-items{
                width: 100vw;
                img{
                    max-width: 420px;
                    height: auto;
                    object-fit: cover;
                    border-radius: .25rem;
                    width: 100%;
                }

                .about-me-image-name{
                    width: auto !important;
                }

                .about-me-bio{
                    display: flex;
                    flex-flow: column;
                    gap: 2rem;
                    width: fit-content;
                }
            }
        }

        .my-work{
            display: flex;
            flex-flow: column;
            width: auto;
            row-gap: 4rem;

            .instructions{
                width: 100vw;

                .article-copy{
                    display: flex;
                    flex-flow: column;
                    gap: 2rem;
                    width: fit-content;
                    font-size: 1.4rem;
                    line-height: 1.5rem;
                }
            }

        }

        .contact-me{
            form{
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                gap: 1rem;
                padding: 1rem;
            }

            .article-copy{
                    display: flex;
                    flex-flow: column;
                    gap: 2rem;
                    width: fit-content;
                    font-size: 1.4rem;
                    line-height: 1.5rem;
                }
        }
    }
}
}
</style>