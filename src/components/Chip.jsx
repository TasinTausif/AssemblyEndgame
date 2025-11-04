import {clsx} from 'clsx'

export default function(props){
    const styles = {
            backgroundColor: props.backgroundColor,
            color: props.color
        }

    const className = clsx("chip", props.isLanguageLost && "lost")//Here, it'll put chip at first and then it will check if props.isLanguageLost is true, if so, it'll add lost class as well.
        
    return (
        <span 
            style={styles} 
            className={className}>
                {props.name}
        </span>
    )
}