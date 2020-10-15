/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface Props {
  loginText: string
  logoutText: string
}

const WORKSPACE_MASTER = 'master'

const getLoginURI = (account: string) => {
  const currentWorkspace = window.__RUNTIME__?.workspace ?? ''
  const workspace =
    currentWorkspace !== WORKSPACE_MASTER ? `${currentWorkspace}--` : ''
  return `${workspace}${account}.myvtex.com/admin/app-store/login?callbackURI=http://apps.vtex.com/_v/auth-callback?redirectURI=${window.location.href}`
}

declare global {
  interface Window {
    __RUNTIME__: {
      workspace?: string
    }
  }
}

const CSS_HANDLES = ['styledLoginLogout'] as const
function LoginLogout({ loginText, logoutText }: Props) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const handles = useCssHandles(CSS_HANDLES)

  function logout() {
    console.log('logging out')
  }

  function login() {
    console.log(getLoginURI('sandboxintegracao'))
  }

  const onClick = (_: React.MouseEvent) => {
    if (loggedIn) {
      logout()
    } else {
      login()
    }
    setLoggedIn(!loggedIn)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span
      className={`${handles.styledLoginLogout} w3 mh6 pv5 pointer t-body c-on-base pointer flex justify-between nowrap`}
      onClick={onClick}
    >
      {loggedIn ? logoutText : loginText}
    </span>
  )
}

export default LoginLogout
