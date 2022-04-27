import { Loader } from "../Loader"

export const StateChecker = ({ isLoading, children }) => {
    return (
        <>
            {
                isLoading ? <Loader /> : children
            }
        </>
    )
};