import cl from './header.module.css';

function Header() {
    return (
        <div className={cl.header}>
            <div className={cl.container}>
                <div className={cl.logo}>
                    <img src='https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' alt='logo'/>
                </div>
                <nav>
                    <ul className={cl.list}>
                        <li><a href='#'>Main</a></li>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Details</a></li>
                        <li><a href='#'>Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;