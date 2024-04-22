import React from 'react'

function reducer(state,action) {
   const {type, payload} = action
   switch(type){
    case 'ADD_TODO':
        console.log('ADD_TODO')
    default:
        console.log('def')
   }
}

export default reducer
