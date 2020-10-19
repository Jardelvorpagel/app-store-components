/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { LoginAccountDialog } from 'extensions.account-dialog'
import React, { Fragment, useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { deleteCookieByName, getCookieByName } from '../utils'

const COOKIE_LOGIN_EXP = 'VtexAppsLoginExpInMs'

interface Props {
  loginText: string
  logoutText: string
}

declare global {
  interface Window {
    __RUNTIME__: {
      workspace?: string
    }
  }
}

const isUserLoggedIn = () => {
  const exp = getCookieByName(COOKIE_LOGIN_EXP)
  return !!exp && parseInt(exp, 10) > Date.now()
}

const CSS_HANDLES = ['styledLoginLogout'] as const
function LoginLogout({ loginText, logoutText }: Props) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)
  const [startedLogin, setStartedLogin] = useState<boolean>(false)
  const handles = useCssHandles(CSS_HANDLES)

  useEffect(() => {
    const isLoggedIn = isUserLoggedIn()
    setLoggedIn(isLoggedIn)
  }, [])

  function logout() {
    setLoggedIn(false)
    deleteCookieByName(COOKIE_LOGIN_EXP)
  }

  function login() {
    setStartedLogin(true)
  }

  const onClick = (_: React.MouseEvent) => {
    if (loggedIn) {
      logout()
    } else {
      login()
    }
  }

  const loginButtonText =
    loggedIn !== null ? (loggedIn ? logoutText : loginText) : ''

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <Fragment>
      <span
        className={`${handles.styledLoginLogout} w3 mh6 pv5 pointer t-body c-on-base pointer flex justify-between nowrap`}
        onClick={onClick}
      >
        {loginButtonText}
      </span>

      <LoginAccountDialog
        isOpen={startedLogin}
        onClose={() => setStartedLogin(false)}
      />
    </Fragment>
  )
}

export default LoginLogout
