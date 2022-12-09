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