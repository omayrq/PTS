/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    name: "",
    image: "",
    tagline: "",
    content: "",
    missionH: "",
    mission: "",
}


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Paragon Technical Solution",
                image: "https://media-live2.prod.scw.jungheinrichcloud.com/resource/image/544882/portrait_ratio1x1/750/750/b6be11e73bc72384ff1122d5e8dd6a2d/D2E1955A070A46910D845E7A8BDBE574/stage-automatic-storage-systems.jpg",
                tagline: "Welcome to the first step toward innovation",
                content: "We provides unique combination of consulting, knowledge, assurance and regulatory services makes organizations more resilient, and in turn inspires trust in their products, systems, services, and the world we live in. Our unique combination of consulting, knowledge, assurance and regulatory services makes organizations more resilient, and in turn inspires trust in their products, systems, services, and the world we live in."
            }
        })
    }
    
    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Paragon Technical Solution",
                image: "https://www.newengland.co.uk/wp-content/uploads/2021/10/automotive.png", 
                tagline: "We automize your imagination",
                content: "Our unique combination of consulting, knowledge, assurance and regulatory services makes organizations more resilient, and in turn inspires trust in their products, systems, services, and the world we live in. ",
                missionH: "Company Mission",
                mission: '"Innovating and inspiring consumers". Our mission at Paragon Technical Solutions is to empower businesses by providing comprehensive sales and service solutions in automation, complete warehousing, machinery, and civil work. Through our expertise, innovative technologies, and customer-centric approach, we aim to optimize operations, enhance productivity, and drive sustainable growth for our clients. We are committed to delivering exceptional value, fostering long-term partnerships, and making a positive impact on the industries we serve. With a focus on continuous learning, adaptability, and environmental responsibility, we strive to be the trusted choice for businesses seeking excellence, innovation, and transformative solutions.'        
            }
        })
    }
    

    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
        {children}
        </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };

export default reducer;