import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['styledLoginLogout'] as const
function LoginLogout() {
  const handles = useCssHandles(CSS_HANDLES)
  return <span className={handles.styledLoginLogout}>Login SPAN</span>
}

export default LoginLogout
