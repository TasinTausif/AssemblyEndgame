import {clsx} from 'clsx'

export default function(props){
    const styles = {
            backgroundColor: props.backgroundColor,
            color: props.color
        }

    const className = clsx("chip", props.isLanguageLost && "lost")
        
    return (
        <span 
            style={styles} 
            className={className}>
                {props.name}
        </span>
    )
}