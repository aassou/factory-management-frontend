import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axiosInstance from '../../axios';
import { searchCategory } from '../../functions/CategoryApi';

import '../../assets/style/product.scss';
import '../../assets/style/general.scss';

const Form = (props) => {
    const token = localStorage.getItem('token');

    // ?errors
    const [categoryErrorClassName, setCategoryErrorClassName] = useState('');
    const [referenceErrorClassName, setReferenceErrorClassName] = useState('');
    const [lengthErrorClassName, setLengthErrorClassName] = useState('');
    const [heightErrorClassName, setHeightErrorClassName] = useState('');
    const [widthErrorClassName, setWidthErrorClassName] = useState('');
    const [weightErrorClassName, setWeightErrorClassName] = useState('');
    const [purchasePriceErrorClassName, setPurchasePriceErrorClassName] = useState('');
    const [salePriceErrorClassName, setSalePriceErrorClassName] = useState('');
    const [imageErrorClassName, setImageErrorClassName] = useState('');
  
    // ? error messages
    const [categoryErrorMsg, setCategoryErrorMsg] = useState('');
    const [referenceErrorMsg, setReferenceErrorMsg] = useState('');
    const [lengthErrorMsg, setLengthErrorMsg] = useState('');
    const [heightErrorMsg, setHeightErrorMsg] = useState('');
    const [widthErrorMsg, setWidthErrorMsg] = useState('');
    const [weightErrorMsg, setWeightErrorMsg] = useState('');
    const [purchasePriceErrorMsg, setPurchasePriceErrorMsg] = useState('');
    const [salePriceErrorMsg, setSalePriceErrorMsg] = useState('');
    const [imageErrorMsg, setImageErrorMsg] = useState('');
  
    // ? success msg
    const [successMsg, setSuccessMsg] = useState('');

    // ? fields
    const [category, setCategory] = useState('');
    const [reference, setReference] = useState('');
    const [length, setLength] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [weight, setWeight] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (props.product) {
            const { product } = props;
            setCategory(product.category);
            setReference(product.reference);
            setLength(product.length);
            setHeight(product.height);
            setWidth(product.width);
            setWeight(product.weight);
            setPurchasePrice(parseFloat(product.purchasePrice));
            setSalePrice(product.salePrice);
            setImage(product.image);
        }
    }, [props.product]);

    const onChange = async (text) => {
        const response = await searchCategory(text, token);

        console.log(response);
        setCategory(text);
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        setSuccessMsg('');
        setCategoryErrorMsg('');
        setCategoryErrorClassName('');
        setReferenceErrorMsg('');
        setReferenceErrorClassName('');
        setLengthErrorMsg('');
        setLengthErrorClassName('');
        setHeightErrorMsg('');
        setHeightErrorClassName('');
        setWidthErrorMsg('');
        setWidthErrorClassName('');
        setWeightErrorMsg('');
        setWeightErrorClassName('');
        setPurchasePriceErrorMsg('');
        setPurchasePriceErrorClassName('');
        setSalePriceErrorMsg('');
        setSalePriceErrorClassName('');
        setImageErrorMsg('');
        setImageErrorClassName('');

        if (!reference) {
            setReferenceErrorMsg('Référence obligatoire!');
            setReferenceErrorClassName('alert-danger');
        }

        if (
            category,
            reference,
            length,
            height,
            width,
            weight,
            purchasePrice,
            salePrice,
            image
        ) {
            const id = props.product ? props.product.id : null;
            const product = {
                id,
                category,
                reference,
                length: parseFloat(length),
                height: parseFloat(height),
                width: parseFloat(width),
                weight: parseFloat(weight),
                purchasePrice: parseFloat(purchasePrice),
                salePrice: parseFloat(salePrice),
                image
            };

            props.ActionMethod(product, localStorage.getItem('token')).then((res) => {
                setSuccessMsg('Produit ajouté avec succès!');
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
                Produit
            </h1>
            {showSuccess(successMsg)}
            <form onSubmit={handlesubmit} className="bg-light border border-lightblue">
                <div className="p-5">
                    <div className="grid-four">
                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Catégorie <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { onChange(e.target.value); }}
                                    value={category}
                                    className={`form-control ${categoryErrorClassName}`}
                                    type="text"
                                />
                            </div>
                            {showError(categoryErrorMsg)}
                        </div>
                    </div>
                {/* block 1 */}
                    <div className="grid-four">
                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Référence <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setReference(e.target.value); }}
                                    value={reference}
                                    className={`form-control ${referenceErrorClassName}`}
                                    type="text"
                                />
                            </div>
                            {showError(referenceErrorMsg)}
                        </div>

                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Longueur
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setLength(e.target.value); }}
                                    value={length}
                                    className={`form-control ${lengthErrorClassName}`}
                                    type="number"
                                />
                            </div>
                            {showError(lengthErrorMsg)}
                        </div>

                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Hauteur
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setHeight(e.target.value); }}
                                    value={height}
                                    className={`form-control ${heightErrorClassName}`}
                                    type="number"
                                />
                            </div>
                            {showError(heightErrorMsg)}
                        </div>

                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Épaisseur
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setWidth(e.target.value); }}
                                    value={width}
                                    className={`form-control ${widthErrorClassName}`}
                                    type="number"
                                />
                            </div>
                            {showError(widthErrorMsg)}
                        </div>
                    </div>
                {/* block 2 */}
                    <div className="grid-four">
                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Poids
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setWeight(e.target.value); }}
                                    value={weight}
                                    className={`form-control ${weightErrorClassName}`}
                                    type="number"
                                />
                            </div>
                            {showError(weightErrorMsg)}
                        </div>

                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Prix Achat
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setPurchasePrice(e.target.value); }}
                                    value={purchasePrice}
                                    className={`form-control ${purchasePriceErrorClassName}`}
                                    type="number"
                                />
                            </div>
                            {showError(purchasePriceErrorMsg)}
                        </div>

                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Prix Vente
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setSalePrice(e.target.value); }}
                                    value={salePrice}
                                    className={`form-control ${salePriceErrorClassName}`}
                                    type="number"
                                />
                            </div>
                            {showError(salePriceErrorMsg)}
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
                        <Link to='/products' className="btn btn-cancel pr-10">
                            Annuler
                        </Link>
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
