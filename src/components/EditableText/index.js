import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {isSave: true, input: ''}

  onButton = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  onInputChange = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {isSave, input} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Editable Text Input</h1>
          {isSave ? (
            <>
              <input value={input} onChange={this.onInputChange} type="text" />
              <button onClick={this.onButton} type="button">
                Save
              </button>
            </>
          ) : (
            <>
              <div className="edit-container">
                <p>{input}</p>
                <button onClick={this.onButton} type="button">
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default EditableText
