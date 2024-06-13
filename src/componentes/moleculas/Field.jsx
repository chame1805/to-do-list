import Label from "../atomos/Label";
import Input from "../atomos/Input";

function Field(props ) {
    return (
        <div>
            <Label text={props.text} />
            <Input type={props.ptype} placeholder={props.placeholder} val={props.val} fnVal={props.fnVal}/>
        </div>
    );
}

export default Field;
