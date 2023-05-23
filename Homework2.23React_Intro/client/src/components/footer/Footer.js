import cl from './footer.module.css';

function Footer() {
    return (
        <div className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.info}>
                    Company Information
                </div>
                <div className={cl.contacts}>
                    Contacts
                </div>
            </div>
        </div>
    );
}

export default Footer;