import axiosInstance from "../../axios";

const NextPage = ({elements, setElements, token}) => {
    const goToNextPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:next"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:next"],
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
        <button type="button" className="btn-inverse" onClick={goToNextPage}>
            Suivant
        </button>
    )
}

export default NextPage;