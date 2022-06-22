import React from "react";
import {FC} from "react";
import {connect} from "react-redux";
import {StoreState} from "../store";
import {Dispatch} from "redux";
import {toggleProfile} from "../store/profile/slice";

export const About: FC = (props: any) => {
   return (
       <>
           <h2>About page</h2>
           <p>{props.name}</p>
           <hr/>
           <input type="checkbox" checked={props.visible} readOnly/>
           <button onClick={() => props.toggle()}>change visible</button>
       </>
   );
};

const mapStateToProps = (state: StoreState) => ({
    name: state.profile.name,
    visible: state.profile.visible
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
   toggle: () => dispatch(toggleProfile())
});

export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(About);
