import { useState, useEffect } from 'react';
import '../../../assets/style/category.scss';

const Form = (props) => {
    // ?errors
    const [nameErrorClassName, setNameErrorClassName] = useState('');
    const [imageErrorClassName, setImageErrorClassName] = useState('');
  
    // ? error messages
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [imageErrorMsg, setImageErrorMsg] = useState('');
  
    // ? success msg
    const [successMsg, setSuccessMsg] = useState('');

    // ? fields
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (props.category) {
            const { category } = props;
            setName(category.name);
            setImage(category.image);
        }
    }, [props.category]);

    const handlesubmit = (e) => {
        e.preventDefault();

        setSuccessMsg('');
        setNameErrorMsg('');
        setNameErrorClassName('');

        setImageErrorMsg('');
        setImageErrorClassName('');

        if (!name) {
            setNameErrorMsg('Nom obligatoire!');
            setNameErrorClassName('alert-danger');
        }
    
        // if (!image) {
        //     setImageErrorMsg('Image obligatoire!');
        //     setImageErrorClassName('alert-danger');
        // }

        if (
            name,
            image
        ) {
            const id = props.category ? props.category.id : null;
            const category = {
                id,
                name,
                image
            };

            props.ActionMethod(category, localStorage.getItem('token')).then((res) => {
                setSuccessMsg('Supplier saved successfully');
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    const showSuccess = (msg) => {
        if (msg) {
            return <p className="alert alert-success">{msg}</p>;
        }
    };

    const showError = (err) => {
        if (err) {
            return <p className="text-danger">{err}</p>;
        }
    };

    return (
        <div className="bg-white">
            <h1 className="text-center p-3">
                {props.ActionBtn}
                {' '}
                Catégorie
            </h1>
            {showSuccess(successMsg)}
            <form onSubmit={handlesubmit} className="bg-light border border-lightblue">
                <div className="p-5">
                {/* block 1 */}
                    <div className="grid-four">
                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Nom <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setName(e.target.value); }}
                                    value={name}
                                    className={`form-control ${nameErrorClassName}`}
                                    type="text"
                                />
                            </div>
                            {showError(nameErrorMsg)}
                        </div>

                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Image
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setImage(e.target.value); }}
                                    value={image}
                                    className={`form-control ${imageErrorClassName}`}
                                    type="text"
                                />
                            </div>
                            {showError(imageErrorMsg)}
                        </div>
                    </div>
                </div>
                <div className="submit-wraper">
                    <div className='flex-1 px-5 py-2'>
                        <span className='text-danger'>*: Champs obligatoires</span>
                    </div>
                    <div className="px-5 py-2 text-end">
                        <input 
                            className="btn bg-light-blue text-white" 
                            type="submit" 
                            value={`${props.ActionBtn}`} 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
