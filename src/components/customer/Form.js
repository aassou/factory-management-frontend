import { useState, useEffect } from 'react';
import '../../assets/style/customer.scss';

const Form = (props) => {
    // ?errors
    const [nameErrorClassName, setNameErrorClassName] = useState('');
    const [addressErrorClassName, setAddressErrorClassName] = useState('');
    const [phoneErrorClassName, setPhoneErrorClassName] = useState('');
    const [numberErrorClassName, setNumberErrorClassName] = useState('');
  
    // ? error messages
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [addressErrorMsg, setAddressErrorMsg] = useState('');
    const [phoneErrorMsg, setPhoneErrorMsg] = useState('');
    const [numberErrorMsg, setNumberErrorMsg] = useState('');
  
    // ? success msg
    const [successMsg, setSuccessMsg] = useState('');

    // ? fields
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        if (props.customer) {
            const { customer } = props;
            setName(customer.name);
            setAddress(customer.address);
            setPhone(customer.phone);
            setNumber(customer.number);
        }
    }, [props.customer]);

    const handlesubmit = (e) => {
        e.preventDefault();

        setSuccessMsg('');
        setNameErrorMsg('');
        setNameErrorClassName('');

        setAddressErrorMsg('');
        setAddressErrorClassName('');

        setPhoneErrorMsg('');
        setPhoneErrorClassName('');

        setNumberErrorMsg('');
        setNumberErrorClassName('');

        if (!name) {
            setNameErrorMsg('Nom obligatoire!');
            setNameErrorClassName('alert-danger');
        }
    
        // if (!address) {
        //     setAddressErrorMsg('Adresse obligatoire!');
        //     setAddressErrorClassName('alert-danger');
        // }
    
        // if (!phone) {
        //     setPhoneErrorMsg('Téléphone obligatoire!');
        //     setPhoneErrorClassName('alert-danger');
        // }
    
        // if (!number) {
        //     setNumberErrorMsg('Numéro obligatoire!');
        //     setNumberErrorClassName('alert-danger');
        // }

        if (
            name,
            address,
            phone,
            number
        ) {
            const id = props.customer ? props.customer.id : null;
            const customer = {
                id,
                name,
                address,
                phone,
                number
            };

            props.ActionMethod(customer, localStorage.getItem('token')).then((res) => {
                setSuccessMsg('Customer saved successfully');
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
                Client
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
                                Number
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setNumber(e.target.value); }}
                                    value={number}
                                    className={`form-control ${numberErrorClassName}`}
                                    type="text"
                                />
                            </div>
                            {showError(numberErrorMsg)}
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
