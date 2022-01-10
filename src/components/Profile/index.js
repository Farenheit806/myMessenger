import { useDispatch, useSelector } from "react-redux";
import {setName, showName} from "../../store/profile/actions";
import { selectProfile } from "../../store/profile/selectors";
import { Form } from "../Form";

import "./style.scss";


const Profile = () => {
    const {userName, isSh} = useSelector(selectProfile);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(showName(isSh));
    }
    const handleSubmit = (newName) => {
        dispatch(setName(newName));
    }
    return (
        <div className="container">
            <h3>Profile</h3>
            <input type="checkbox" checked={isSh} onChange={handleChange} />
            {isSh && <p>Hello, your name is {userName}!</p>}
            <Form onSubmit={handleSubmit} text="Введите имя пользователя" btnText="Подтвердить" />
        </div>
        )
}

export default Profile;