import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/menu/User'
import { fetchUsersAction } from '../../redux/actions'

function UsersPage() {
    const dispatch = useDispatch()
    const {users, selectedUser} = useSelector(state => state.usersReducer)


    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    console.log(users, 'asfsfsdfsdf')


  return (
    <div>
        <button onClick={getUsers}>get users</button>
        {users.map(user => (
            <div key={user.id}>
                <User userInfo={user} />
                {selectedUser && selectedUser.id === user.id && (
                    <div>
                        <h3>Дополнительная информация</h3>
                        <p>UserName: {selectedUser.username}</p>
                        <p> Phone: {selectedUser.phone}</p>
                    </div>
                )}
            </div>
            ))}
    </div>
  )
}

export default UsersPage