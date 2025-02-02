import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Card = (people) => {


    return (
        <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/avon-starros-main_0371a5a7.jpeg?region=0%2C0%2C1920%2C1080" className="card-img-top" alt="Personaje" />
            <div className="card-body text-start">
                <h5 className="card-title">{people.name}</h5>
             
                <div className="card-body-link d-flex justify-content-between">
                    <Link to={"/info-Item/"+people.categories+"/"+people.id} className="btn btn-outline-primary">Learn more!</Link>
                    {/* el de abajo debe ser boton */}
                    <Link to="/demo" className="btn btn-outline-warning">♥</Link> 
                </div>
            </div>
        </div>
    );
};
