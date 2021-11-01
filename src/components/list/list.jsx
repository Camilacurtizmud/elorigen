import { Component } from 'react';

class List extends Component {

    render() {
        const users = [
            {
                "token": "-JqL-1uV41zzfURbO6gUsg",
                "data": {
                    "id": "personNickname",
                    "email": "internetEmail",
                    "gender": "personGender",
                    "last_login": {
                        "date_time": "dateTime|UNIX",
                        "ip4": "internetIP4"
                    }
                }
        ]

        doSomething = () => {
            this.setState
        }

        
        return <div>
            <ul>
                {users.map(user => {
                    const {id, email, last_login: login } = user;
                    return (<li
                        key={id}
                    >{email}</li>)
                }
                )}
                
            </ul>
        </div>;
    }
}

export default List;