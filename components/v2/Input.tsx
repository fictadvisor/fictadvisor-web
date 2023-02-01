import React, {useRef, useState} from "react";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    EyeIcon,
    EyeSlashIcon,
    MagnifyingGlassIcon, XMarkIcon
} from "@heroicons/react/24/outline";

export enum InputState{
    DEFAULT = 'default', DISABLED = 'disabled', ERROR = 'error', SUCCESS = 'success'
}

export enum InputSize{
    LARGE = "large", MEDIUM = "medium"
}

export enum InputType{
    DEFAULT = "default", HIDDABLE = "hiddable", NO_LABEL = "unlabeled", SEARCH = "search"
}

interface InputProps{
    label?: string,
    placeholder: string,
    defaultRemark?: string,
    successRemark?: string,
    errorRemark?: string,
    state: InputState,
    size: InputSize,
    type: InputType,
    className?: string
}


const Input: React.FC<InputProps> = (props) => {

    let remark;
    switch(props.state) {
        case InputState.DEFAULT: {
            remark = props.defaultRemark;
            break;
        }
        case InputState.ERROR: {
            remark = props.errorRemark;
            break;
        }
        case InputState.SUCCESS: {
            remark = props.successRemark;
            break;
        }
        case InputState.DISABLED: {
            remark = null;
            break;
        }
    }

    const [isFocused, setIsFocused] = useState(false);
    const fieldRef = useRef(null);

    function handleFocus(value: boolean){
        if (props.state === InputState.DEFAULT){
            setIsFocused(value)
            // if (isFocused) {
            //     fieldRef.current.style.color = "#FFFFFF"
            // }
            // else{
            //     fieldRef.current.style.color = "inherit"
            // }
        }
    }

    const [isHidden, setIsHidden] = useState(props.type === InputType.HIDDABLE);
    let inputType = isHidden ? "password" : "text";

    const [value, setValue] = useState("");
    function handleChange(event){
        setValue(event.target.value);
    }

    const leftIcon = props.type === InputType.SEARCH ? <MagnifyingGlassIcon className="icon white-icon"/> : null;

    let rightIcon = null;
    if (props.type === InputType.HIDDABLE){
        if (isHidden) rightIcon = <EyeIcon className="icon white-icon"/>
        else          rightIcon = <EyeSlashIcon className="icon white-icon"/>
    }
    else{
        if (props.state === InputState.SUCCESS) rightIcon = <CheckCircleIcon className = "icon input-success-icon"/>
        else if (props.state === InputState.ERROR) rightIcon = <ExclamationCircleIcon className = "icon input-error-icon"/>
        else if (props.type === InputType.SEARCH){
            if (value !== "") rightIcon = <XMarkIcon className="icon white-icon"/>
        }
    }


    function handleIconClick(){
        if (props.type === InputType.HIDDABLE){
            setIsHidden(!isHidden);
        }
        if (props.type === InputType.SEARCH){
            setValue("");
        }
    }

    const inputColor = `${props.state}-input-color `
    const isIcon = props.state === InputState.ERROR || props.state === InputState.SUCCESS || props.type === InputType.HIDDABLE || (props.type === InputType.SEARCH && value !== "");
    const inputStyle = `${props.size}-${props.type}${isIcon ? "-icon" : ""}-input`
    const additionalClass = props.className ? " " + props.className : ""
    const className = inputColor + inputStyle + additionalClass


    return (
        <div className={className}>
            <label ref={fieldRef}> {props.label} </label>
            {leftIcon && <div className="icon left-icon">{leftIcon}</div>}
            {rightIcon && <div className="icon right-icon" onClick={handleIconClick}>{rightIcon}</div>}
            <input placeholder={props.placeholder} type={inputType} onChange={handleChange} value = {value}
                   onFocus={() => handleFocus(true)}
                   onBlur={() => handleFocus(false)}/>
            {remark && <p>{remark}</p>}
        </div>
    );
}

export default Input;



