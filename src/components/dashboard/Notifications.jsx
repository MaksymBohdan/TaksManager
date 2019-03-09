import React from 'react'
import moment from 'moment'

const Notification = props => {
  const { notifications } = props
  return (
    <div>
      {/* <div className='section '> */}
      
        <div className='card z-depth-0 '>
          <div className='card-content '>
            <span className='card-title'>Notifications</span>
            <ul className='notifications'>
              {notifications &&
                notifications.map(item => {
                  return (
                    <li key={item.id}>
                      {item.title ? (
                        <div>
                          <span className='black-text'>
                            <span className='pink-text'>{item.title} </span>
                            {item.content} by
                          </span>
                          <span className='pink-text'> {item.user}</span>
                          <div className='grey-text note-date'>
                            {moment(item.time.toDate()).fromNow()}
                          </div>
                        </div>
                      ) : (
                        
                        <div>
                          <span className='pink-text'>{item.user} </span>
                          <span>{item.content}</span>
                          <div className='note-date grey-text'>
                            {moment(item.time.toDate()).fromNow()}
                          </div>
                        </div>
                      )}
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Notification
