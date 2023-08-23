
import styles from './Sobre.module.css'
import avatar from './images/male.png'
import perfil from './images/perfil.jpg'


import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
import typescript from './images/typescript.svg'
import php from './images/php.svg'
import swift from './images/swift.svg'
import hardware from './images/hardware.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={perfil} alt="Avatar" className={styles.perfil} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Mateus Henrique</span> <br />
                    <strong>Estudante de programação</strong> </p>

                    <p>Estudo no cotemig - mobile</p>

                    <p>Sou apaixonada por transformar ideias em realidade digital.</p>

                    <p>Com o objetivo de estar sempre evoluindo</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                    <img src={typescript} alt="Ícone do typescript" />
                    <img src={php} alt="Ícone do php" />
                    <img src={swift} alt="Ícone do swift" />
                    <img src={hardware} alt="Ícone do hardware" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

