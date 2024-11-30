import React, { useRef, useState } from 'react';
import { MdInventory } from "react-icons/md";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { MdLabel } from "react-icons/md";
import { TbNumber123 } from "react-icons/tb";
import { GrBitcoin } from "react-icons/gr";
import { Html5QrcodeScanner } from "html5-qrcode";


function Form() {
    let [useForm, setForm] = useState({
        ScanQR: "ScanQR",
        Enter_Product_Nam: " ",
        Choose_categories: " ",
        Enter_quality: " ",
        Enter_price: " "

    })



    let [error, setError] = useState({})
    let [useClick, setClick] = useState(false)

    const startScanning = () => {
        setClick(true)
        const html5QrCodeScanner = new Html5QrcodeScanner(
            "qr-reader",
            { fps: 10, qrbox: 250 },
            false
        );

        html5QrCodeScanner.render(
            (decodedText) => {
                setForm((prevState) => ({ ...prevState, ScanQR: decodedText }));
                html5QrCodeScanner.clear();
                setClick(false)
            },
            (error) => {
                console.error("QR Scan Error: ", error);
            },
        //    setClick(true)
        );
    };

    function validForm() {
        let isValid = true
        let error = {}
        if (useForm.ScanQR === "ScanQR") {
            isValid = false
            error["ScanQR"] = "ScanQR value is required"
        }
        if (useForm.Enter_Product_Nam === " ") {
            isValid = false
            error["Enter_Product_Nam"] = "Product Name is required"
        }
        if (useForm.Choose_categories === " ") {
            isValid = false
            error["Choose_categories"] = "Choose categories is required"
        }
        if (useForm.Enter_quality === " ") {
            isValid = false
            error["Enter_quality"] = "Quality is required"
        }
        if (useForm.Enter_price === " ") {
            isValid = false
            error["Enter_price"] = "Enter_price is required"
        }
        setError(error)
        return isValid
    }
    function handleClick(e) {
        e.preventDefault();
        if (validForm()) {
            console.log(useForm)
        }

    }
    return (
        <>
            <div
                className="position-relative"
                style={{ marginTop: "1px" }}
            >
                <div
                    className="text-center fw-bolder fs-2"
                    style={{
                        color: "white",
                        padding: "20px",
                        backgroundColor: "#338BA8",
                    }}
                >
                    <MdInventory />
                    Inventory Management
                </div>
            </div>
            <div style={{ fontWeight: 'bolder', textAlign: "center" }}>Camera Area</div>
            <div id="qr-reader" style={{ width: "400px", margin: "20px auto" }}></div>
            <div className="text-center">
                {
                    useClick ? (
                        <div id="qr-reader" style={{ width: "400px", margin: "20px auto" }}></div>
                    ) : (
                        <button onClick={startScanning} className="btn btn-success mx-2">
                            Start Scanning
                        </button>
                    )
                }
               

            </div>


            <div className="position-relative">
                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "60px" }}
                >
                    <span
                        className="input-group-text bg-primary"
                        style={{ color: "white" }}
                        id="basic-addon1"
                    >
                        <MdOutlineQrCodeScanner />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Scan QR/Barcode"
                        aria-label="Scan QR/Barcode"
                        aria-describedby="basic-addon1"
                        name='ScanQR'
                        value={useForm.ScanQR}
                        onChange={(e) => setForm({ ...useForm, ScanQR: e.target.value })}
                        readOnly
                    />

                </div>
                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "90px" }}
                >
                    {error.ScanQR && <div className='text-danger'>{error.ScanQR}</div>}
                </div>


                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "130px" }}
                >
                    <span
                        className="input-group-text bg-primary"
                        style={{ color: "white" }}
                        id="basic-addon1"
                    >
                        <BsBox />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        name='Enter_Product_Nam'
                        placeholder="Enter Product Name"
                        aria-label="Enter Product Name"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setForm({ ...useForm, Enter_Product_Nam: e.target.value })}
                    />
                </div>
                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "166px" }}
                >
                    {error.Enter_Product_Nam && <div className='text-danger'>{error.Enter_Product_Nam}</div>}
                </div>

                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "200px" }}
                >
                    <span
                        className="input-group-text bg-primary"
                        style={{ color: "white" }}
                        id="basic-addon1"
                    >
                        <MdLabel />
                    </span>
                    <select className="form-select" aria-label="Default select example" name="Choose_categories" onChange={(e) => setForm({ ...useForm, Choose_categories: e.target.value })}>
                        <option defaultValue>Choose categories</option>
                        <option value="Electronic" >Electronic</option>
                        <option value="Book">Book</option>
                        <option value="Color">Color</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "236px" }}
                >
                    {error.Choose_categories && <div className='text-danger'>{error.Choose_categories}</div>}
                </div>

                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "270px" }}
                >
                    <span
                        className="input-group-text bg-primary"
                        style={{ color: "white" }}
                        id="basic-addon1"
                    >
                        <TbNumber123 />
                    </span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter quantity"
                        aria-label="Enter quantity"
                        aria-describedby="basic-addon1"
                        name='Enter_quality'
                        onChange={(e) => setForm({ ...useForm, Enter_quality: e.target.value })}
                    />
                </div>
                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "300px" }}
                >
                    {error.Enter_quality && <div className='text-danger'>{error.Enter_quality}</div>}
                </div>

                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "330px" }}
                >
                    <span
                        className="input-group-text bg-primary"
                        style={{ color: "white" }}
                        id="basic-addon1"
                    >
                        <GrBitcoin />
                    </span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter price"
                        aria-label="Enter price"
                        aria-describedby="basic-addon1"
                        name='Enter_price'
                        onChange={(e) => setForm({ ...useForm, Enter_price: e.target.value })}
                    />
                </div>
                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "360px" }}
                >
                    {error.Enter_price && <div className='text-danger'>{error.Enter_price}</div>}
                </div>

                <div
                    className="input-group mb-3 position-absolute top-50 start-50 translate-middle"
                    style={{ width: "480px", marginTop: "400px" }}
                >
                    <button onClick={handleClick} type="button" className="btn btn-primary" style={{ width: "480px" }}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Form;
