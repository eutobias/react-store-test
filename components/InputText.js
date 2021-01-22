const InputText = (props) => {

  const classNames = () => {
    let output = []
    
    if (props.className)
      output.push(props.className)

    if (props.error)
      output.push(props.error)

    return output.join(' ')
  }

  return (
    <div className={classNames()}>
      <input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        placeholder=" "
      />
      <label>{props.label}</label>
    </div>
  )
}

export default InputText
