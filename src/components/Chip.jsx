export default function(props){
    const styles = {
        backgroundColor: props.backgroundColor
    }
    return (
        <button style={styles} className="chip">{props.name}</button>
    )
}