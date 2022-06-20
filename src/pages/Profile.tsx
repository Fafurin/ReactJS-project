import React, {useContext} from "react";
import {FC} from "react";
import {ThemeContext} from "../utils/ThemeContext";
import {changeName, toggleProfile} from "../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";
import {ProfileState} from "../store/profile/reducer";

export const Profile: FC = () => {
   const {theme, toggleTheme} = useContext(ThemeContext);
   const visible = useSelector((state: ProfileState) => state.visible);
   const name = useSelector((state: ProfileState) => state.name);

   const dispatch = useDispatch();

   return (
       <>
            <h2>Profile page</h2>
            <div>
                <p>{theme === 'light' ? 'light' : 'dark'}</p>
                <button onClick={toggleTheme}>change theme</button>
            </div>
           <hr/>
           <input type="checkbox" checked={visible} readOnly/>
           <button onClick={() => dispatch(toggleProfile())}>change visible</button>
           <hr/>
           <p>{name}</p>
           <button onClick={() => dispatch(changeName('Lesson5'))}>change name</button>
       </>
   );
};
