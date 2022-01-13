import axiosInstance from "../../axios";

const LastPage = ({elements, setElements, token}) => {
    const goToLastPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:last"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:last"],
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
        <button type="button" className="btn-inverse" onClick={goToLastPage}>
            &gt;|
        </button>
    )
}

export default LastPage;