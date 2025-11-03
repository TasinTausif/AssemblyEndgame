export default function(props){
    const styles = {
            backgroundColor: props.backgroundColor,
            color: props.color
        }
        
    return (
        <span style={styles} className="chip">{props.name}</span>
    )
}