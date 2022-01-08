import { useState, useEffect } from 'react';
import '../../assets/style/supplier.scss';

const Form = (props) => {
    // ?errors
    const [nameErrorClassName, setNameErrorClassName] = useState('');
    const [addressErrorClassName, setAddressErrorClassName] = useState('');
    const [phoneErrorClassName, setPhoneErrorClassName] = useState('');
  
    // ? error messages
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [addressErrorMsg, setAddressErrorMsg] = useState('');
    const [phoneErrorMsg, setPhoneErrorMsg] = useState('');
  
    // ? success msg
    const [successMsg, setSuccessMsg] = useState('');

    // ? fields
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (props.supplier) {
        const { supplier } = props;
        setName(supplier.name);
        setAddress(supplier.address);
        setPhone(supplier.phone);
        }
    }, [props.supplier]);

    const handlesubmit = (e) => {
        e.preventDefault();

        setSuccessMsg('');
        setNameErrorMsg('');
        setNameErrorClassName('');

        setAddressErrorMsg('');
        setAddressErrorClassName('');

        setPhoneErrorMsg('');
        setPhoneErrorClassName('');

        if (!name) {
            setNameErrorMsg('Name is rquired!');
            setNameErrorClassName('alert-danger');
        }
    
        if (!address) {
            setAddressErrorMsg('Address is rquired!');
            setAddressErrorClassName('alert-danger');
        }
    
        if (!phone) {
            setPhoneErrorMsg('Phone is rquired!');
            setPhoneErrorClassName('alert-danger');
        }

        if (
            name,
            address,
            phone
        ) {
            const id = props.supplier ? props.supplier.id : null;
            const supplier = {
                id,
                name,
                address,
                phone
            };

            props.ActionMethod(supplier, localStorage.getItem('token')).then((res) => {
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
                Fournisseur
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
                            <label className="form-label">Adresse</label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setAddress(e.target.value); }}
                                    value={address}
                                    className={`form-control ${addressErrorClassName}`}
                                    type="text"
                                />
                            </div>
                            {showError(addressErrorMsg)}
                        </div>

                        <div className="mb-3 px-2">
                            <label className="form-label">Téléphone</label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setPhone(e.target.value); }}
                                    value={phone}
                                    className={`form-control ${phoneErrorClassName}`}
                                    type="text"
                                />
                            </div>
                            {showError(phoneErrorMsg)}
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
