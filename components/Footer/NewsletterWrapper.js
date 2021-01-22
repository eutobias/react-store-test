import InputText from 'components/InputText'
import { useState } from 'react'
import styles from './NewsletterWrapper.module.scss'

const NewsletterWrapper = ({ submitNewsletter }) => {

  const [inputs, setInputs] = useState({
    __name: {
      name: '__name',
      label: 'Nome',
      type: 'text',
      value: 'Renata',
      error: false
    },
    __email: {
      name: '__email',
      label: 'E-mail',
      type: 'text',
      value: '',
      error: false
    }
  })

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.currentTarget.name]: {
        ...inputs[e.currentTarget.name],
        value: e.currentTarget.value
      }
    })
  }

  const onSubmit = (e) => {
    submitNewsletter(inputs)
    return e.preventDefault()
  }

  return (
    <section className={styles.newsletterWrapper}>
      <form className={styles.newsletterForm} onSubmit={onSubmit}>
        <h3>Assine nossa news</h3>
        {
          Object.keys(inputs).map((v, i) => {
            return (
              <InputText
                key={`field-${i}`}
                label={inputs[v].label}
                type={inputs[v].type}
                name={inputs[v].name}
                value={inputs[v].value}
                error={inputs[v].error}
                onChange={handleInputChange}
                className={styles.inputNewslleter}
              />
            )
          })
        }
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewsletterWrapper;