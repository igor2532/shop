import React, { useContext } from 'react'

export default function CommentItem({item,itemKey}) {
    return (
    <div key={itemKey} className="App_comments_items_item">
    <div className="App_comments_items_block_up">
      <div className="App_comments_items_item_author">{item.user}</div>
      <div className="App_comments_items_item_date">{item.date} {item.time}</div>
    </div>
    <div className="App_comments_items_item_title"> {item.title} </div>
    <div className="App_comments_items_item_likes">{item.likes}<button>
        <i class="material-icons">favorite</i>
      </button>
    </div>
  </div>
  )
}
