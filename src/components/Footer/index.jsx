import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <section className="social">
                <a href="facebook.com" target="_blank">
                    <img src="/img/fb.png" alt="logo Facebook" />
                    </a>
                <a href="twitter.com" target="_blank">
                    <img src="/img/tw.png" alt="logo Twitter" />
                    </a>
                <a href="instagram.com" target="_blank">
                    <img src="/img/ig.png" alt="logo Instagram" />
                </a>
            </section>
            <section>
                <img src="/img/logo.png" alt="Logo Organo" />
            </section>
            <section>
                <p>Desenvolvido por Mariano Júnior.</p>
            </section>
        </footer>
    )
}

export default Footer