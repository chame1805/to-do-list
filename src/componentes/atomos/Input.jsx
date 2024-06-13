import './Input.css';

function Input(props) {
    const handleOnChange = (event) =>{
        props.fnVal(event.target.value)
    }
    return (
        <div id="login_input">
            <input type={props.type} placeholder={props.placeholder} value={props.val} fnVal={props.fnVal} onChange={handleOnChange}/>
        </div>
    );
}
export default Input