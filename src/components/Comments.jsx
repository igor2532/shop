import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductContext from '../Context/ProductContext';

function Comments() {
    const {comments,setComments} = useContext(ProductContext)
    const [textValue, setTextValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const params = useParams()
    const arrComment = comments.filter(item => item.idProduct == params.id);
    const addComment = (e) => {
        e.preventDefault();
     
     if(nameValue!=="" && nameValue!="" && textValue!=="" && textValue!="") {
        setComments([...comments, {user:nameValue, title:textValue, idProduct:params.id, likes:0}])
     }
    }
    return (
        <div  className='App_comments'>
            <div className='App_comments_title'><span>Отзывы по продукции:</span></div>
            <div className='App_comments_items'>
                {arrComment.length=== 0 &&

            <div className='App_comments_empty'><span>Комментарий нет</span></div>
            }
                {
                    arrComment.map((item, itemKey) => (
                        <div className='App_comments_items_item'>
                           
                       <div className='App_comments_items_block_up'> 
                        <div className='App_comments_items_item_author'> {item.user} </div> 
                           <div className='App_comments_items_item_date'> {item.date}  {item.time} </div>    
                        </div>    
                      <div className='App_comments_items_item_title'> {item.title} </div>
                      <div className='App_comments_items_item_likes'> {item.likes} <button><i class="material-icons">favorite</i> </button></div>
                        </div>
                    ))
                }

            </div>
            <div>
                <form className='App_form'>
                    <div> <input onChange={(e)=>setNameValue(e.target.value)} placeholder='Введите свое имя' /></div>
                    <textarea  onChange={(e)=>setTextValue(e.target.value)} placeholder='Введите комментарий'></textarea>

                    <div><button onClick={addComment} className='orderBtn'>Отправить</button></div>
                </form>
            </div>
        </div>
    )
}

export default Comments
