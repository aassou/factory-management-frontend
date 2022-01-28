import FirstPage from "./FirstPage";
import PreviousPage from "./PreviousPage";
import NextPage from "./NextPage";
import LastPage from "./LastPage";

const Pagination = ({elements, setElements, token}) => {
    console.log(elements);
    return (
        <>
            <FirstPage  elements={elements} setElements={setElements} token={token} />
            <PreviousPage  elements={elements} setElements={setElements} token={token} />
            <NextPage elements={elements} setElements={setElements} token={token} />
            <LastPage  elements={elements} setElements={setElements} token={token} />
        </>
    )
}

export default Pagination;