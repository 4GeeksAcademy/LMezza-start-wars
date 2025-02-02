import React, { useEffect, useState } from "react";
//import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { InfoCard } from "../component/infoCard";



export const Item = () => {

    //const {store, actions} = useContext()
    let params = useParams()
    //console.log(params);
    const [items, setItems] = useState({})

    console.log(items);
    

    async function getInfoItem() {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        try {
            const response = await fetch(`https://www.swapi.tech/api/${params.categories}/${params.id}`, requestOptions);
            const data = await response.json();
            setItems(data)
        } catch (error) {
            console.error(error);
        };
    }



    useEffect(() => {
        getInfoItem()
    }, [])

    return (
        <div className="text-center mx-auto">
            <h1>Item</h1>
            <InfoCard />

        </div >
    )
};
