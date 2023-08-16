export default function Address(props) {
    return (
        <div className='Address'>
            <span>Id: {props.id}</span>
            <span>Street: {props.street}</span>
            <span>Zip: {props.zip}</span>
            <span>City: {props.city}</span>
        </div>
    );
}