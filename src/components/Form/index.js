import { useEffect, useState, useRef } from "react"
import {Button, TextField} from '@mui/material';
import "./style.scss";

export const Form = ({onSubmit, text, isFlex,btnText}) => {
    const [value,setValue] = useState("")
    const inputRef = useRef()
    var flexClass;
    isFlex === undefined ? flexClass="" : flexClass = isFlex;

    const handleChange = (e) => setValue(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        setValue("")
        value!=="" ? onSubmit(value) : alert("Вы ничего не ввели!")
    }

    useEffect(() => {
        inputRef.current?.focus()
    },[value])

    return (
        <form onSubmit={handleSubmit} className={`chat-form ${flexClass}`} >
            <TextField id="outlined-basic" label={text} variant="filled" ref={inputRef} value={value} onChange={handleChange} />
            <Button variant="contained" type="submit">{btnText}</Button>
        </form>
    )
}