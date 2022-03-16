import React from 'react'

export default function Button (params) {
    console.log(params.passProperty);
  return (
    <button key="1" style={params.passProperty.theme} onClick={params.passProperty.onclick} type={params.passProperty.type ?(params.passProperty.type):(null)} >
        {" "+params.passProperty.label}
    </button>
  )
}
