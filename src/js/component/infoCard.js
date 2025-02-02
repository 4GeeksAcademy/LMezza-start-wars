import React from "react";


export const InfoCard = () => {

    return (
        <div className="mx-auto mt-5" style={{ width: "1500px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/avon-starros-main_0371a5a7.jpeg?region=0%2C0%2C1920%2C1080" className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">text....</p>
                    </div>
                </div>
            </div>
            <div className="card-group mt-2 text-danger border-top rounded-0 border-danger">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">text</p>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Birth Year</h5>
                        <p className="card-text">text</p>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Gender</h5>
                        <p className="card-text">text</p>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Height</h5>
                        <p className="card-text">text</p>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Skin color</h5>
                        <p className="card-text">text</p>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Eye color</h5>
                        <p className="card-text">text</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
