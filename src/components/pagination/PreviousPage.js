import axiosInstance from "../../axios";

const PreviousPage = ({elements, setElements, token}) => {
    const goToPreviousPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:previous"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:previous"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setElements(res.data);
        }
    }

    return (
        <button type="button" className="btn-inverse" onClick={goToPreviousPage}>
            Précédent
        </button>
    )
}

export default PreviousPage;