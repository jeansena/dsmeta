import icon from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={icon} alt="DSMenta"/>
                    <h1>DSMenta</h1>
                    <p>Desenvolvidor por
                        <a href="#">DevSuperior</a>
                    </p>
            </div>
        </header>
    )
}

export default Header