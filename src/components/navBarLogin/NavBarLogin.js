import SettingIcon from '../../icons/SettingIcon';
import NotificationIcon from '../../icons/NotificationIcon';
import ChatIcon from '../../icons/ChatIcon';

const NavBarLogin = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand"></a>
            <div>
                <ChatIcon width={24} className="mr-2"/>
                <NotificationIcon width={24} className="mr-2"/>
                <SettingIcon width={24} className="mr-2"/>
            </div>
        </nav>
    )
};

export default NavBarLogin;