import React from 'react'
import { Form } from 'react-bootstrap'

class webriQForm extends React.Component {
    loadWebriQFormScript() {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.id = 'webriqform'
      script.src = 'https://forms.webriq.com/js/initReactForms'
      document.body.appendChild(script)
      const headScript = document.getElementsByTagName('script')[0]
      headScript.parentNode.insertBefore(script, headScript)
    }

    componentDidMount() {
      if (window && !window.isWebriQFormLoaded) {
        this.loadWebriQFormScript()
      }

      if (window && window.isWebriQFormLoaded) {
        window.webriqFormRefresh()
      }

    }
    constructor(...args) {
      super(...args);

      this.state = { 
        validated: false
      };
    }

    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
    }

    render(){
        const { children, formName, formId, className } = this.props
        const { validated } = this.state;
        return (
          <Form
            name={formName || Form}
            method="POST"
            data-form-id={formId}
            webriq="true"
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
            className={className}
          >
            {children}
          </Form>

        )
    }
}
export default webriQForm

