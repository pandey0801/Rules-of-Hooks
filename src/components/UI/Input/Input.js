
// import classes from './Input.module.css'
import classes from './Input.module.css'

const Input = (props) =>{

    // console.log(props)
    return <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
        >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
}

export default Input;