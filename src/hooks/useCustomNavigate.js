import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
    const navigate = useNavigate();

    const goTo = (path, options) => {
        navigate(path, options);
    };
    const goBack = () => {
        navigate(-1); 
    };

    return { goTo, goBack };
};