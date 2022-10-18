import './css/HeaderComponent.css';
function HeaderComponent(props){
    return (
        <div className="header">
            <div>
                <ul className="menuitems">
                        <li>
                            Home
                        </li>
                        <li>
                            Menu1
                        </li>
                        <li>
                            Menu2
                        </li>
                        <li>
                            Menu3
                        </li>
                        <li>
                            Menu4
                        </li>
                    </ul>
                </div>
        </div>
        
    );
}

export default HeaderComponent;