import axiosInstance from "../../axios";

const FirstPage = ({elements, setElements, token}) => {
    const goToFirstPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:first"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:first"],
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
        <button type="button" className="btn-inverse" onClick={goToFirstPage}>
            |&lt;
        </button>
    )
}

export default FirstPage;