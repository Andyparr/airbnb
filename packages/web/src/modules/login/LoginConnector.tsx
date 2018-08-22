import * as React from 'react'

import { LoginView } from './ui/LoginView'
import { LoginController } from '@airbnb/controller'
import { RouteComponentProps } from 'react-router-dom'

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state }
    } = this.props
    if (state && state.next) {
      return history.push(state.next)
    }
    history.push('/')
  }

  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
      </LoginController>
    )
  }
}
