import styles from "./Quote.module.css";
export default function Quote ( props ) {
    return (
    <>
    <div>
    id : {props.id}
    </div>
    <div className ={ styles.text } >
    Texte : {props.text}
    </div>
    <div className ={styles.autheur} >
    Auteur : {props.author}
    </div>
    </>) ;
    }