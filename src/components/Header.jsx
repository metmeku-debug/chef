import chefimg from '../assets/chef.png';
export default function Header(){
    return (
        <header className="header">
            <img src={chefimg} alt="chef ai logo" className="chef-logo" />
            <h1>Chef Ai</h1>
        </header>
    )
}