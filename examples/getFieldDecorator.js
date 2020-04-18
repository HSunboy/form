/* eslint react/no-multi-comp:0, no-console:0 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createForm } from 'rc-form';

class Form extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  };
  state = {
    showName: true,
  };

  componentWillMount() {
    this.nameDecorator = this.props.form.getFieldDecorator('name', {
      initialValue: '',
      rules: [{
        required: true,
        message: 'What\'s your name?',
      }],
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  };

  onChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { getFieldError } = this.props.form;

    return (
      <form onSubmit={this.onSubmit}>
        {this.state.showName ? (
          this.props.form.getFieldDecorator('nameTest', {
            initialValue: '',
            rules: [{
              required: true,
              message: 'What\'s your name?',
            }],
          })(
            <input />
          )
        ) : (
            [this.props.form.getFieldDecorator('nameTest', {
              initialValue: '',
              rules: [{
                required: true,
                message: 'What\'s your test name?',
              }],
            })(
              <input />
            ),
            ])}
        {this.nameDecorator(
          <input
            onChange={this.onChange}
          />
        )}
        <div style={{ color: 'red' }}>
          {(getFieldError('name') || []).join(', ')}
        </div>
        <button>Submit</button>
        <a style={{ color: 'skyblue' }} onClick={() => {
          this.setState((state) => {
            return {
              showName: !state.showName,
            };
          });
        }}
        >
        切换表单
        </a>
      </form>
    );
  }
}

const WrappedForm = createForm()(Form);
ReactDOM.render(<WrappedForm />, document.getElementById('__react-content'));
