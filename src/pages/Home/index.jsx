import HomePlane from './assets/HomePlane.svg'
import { homePlane, body, homeContent, homeTitle } from '../../styles/Theme'


export function Home() {
    return (
        <div className={body()} >
            <img className={homePlane()} src={HomePlane} alt="Airplane with air trail" />
            <div className={homeContent()}>
                <div className={homeTitle()} >
                    <h1>Voar nunca foi tão fácil!</h1>
                </div>
                
            </div>

        </div>
    );
}