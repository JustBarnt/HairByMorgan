<script lang="ts">
    import { cubicIn, cubicOut } from "svelte/easing";
    import { slide } from "svelte/transition";

    let animateIn = { duration: 500, easing: cubicOut, delay: 500 };
    let animateOut = { duration: 500, easing: cubicIn };

</script>

<header in:slide={animateIn} out:slide={animateOut}>
    <content class="logo">
        <div class="border-box">
            <p>Hair By Morgan</p>
        </div>
    </content>
    <nav>
        <ul class="navigation">
            <li class="nav-item button">About Me</li>
            <li class="nav-item button">My Work</li>
            <li class="nav-item button">Contact Me</li>
        </ul>
    </nav>
</header>

<main>
    <content class="main">
        <section class="about-me">
            <div class="about-me-items">
                <img src="../src/assets/about-me-temp.jpg" alt="Morgan Gebhart">
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
        <section class="my-work">

        </section>
        <section class="contact-me">
            <form action="mailto:" method="post" enctype="" name="contact-form" class="contact-form">
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
        z-index: 10;
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

            section{
                flex-basis:75%;
                display: flex;
            }

            .about-me{
                display: flex;
                
                .about-me-items{
                    flex-basis: 100%;
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


            .contact-me{
                justify-content: center;
                .contact-form{
                    display: grid;
    
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

        header{
            display: grid;
            justify-content: center;
            justify-items: center;
            gap: 1rem;
            grid-auto-flow: row;

            .border-box{
                font-size: 4rem;
                padding: 3rem 2rem
            }
        }
    }
</style>