import { ErrorScreen } from "../ErrorScreen";
import { Loader } from "../Loader"

export const StateChecker = ({ isLoading, isError, children }) => {
    return (
        <>
            {
                isLoading ? <Loader />
                    : isError ? <ErrorScreen />
                        : children
            }
        </>
    )
};