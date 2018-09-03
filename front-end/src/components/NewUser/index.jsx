import React from 'react'

import Label from '../Label'
import Input from '../Input'

class NewUser extends React.Component {
  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label htmlFor="name" text="Quem é você?" invalidValue/>
          <Input
            id="name"
            placeholder="Digite seu nome"
            maxLength="40"
            readOnly
            defaultValue="Digite seu nome"
          ></Input>
        </form>
      </div>
    )
  }
}

export default NewUser
