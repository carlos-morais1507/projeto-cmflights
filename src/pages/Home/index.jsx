import HomePlane from './assets/HomePlane.svg'
import { homePlane } from '../../styles/Theme'


export function Home() {
    return (
        <div>
            <img className={homePlane()} src={HomePlane} alt="Airplane with air trail" />
            <h1>Home</h1>

        </div>
    );
}