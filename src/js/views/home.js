import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext"
import { Card } from "../component/card";
import "../../styles/home.css";


export const Home = () => {
	const {store, actions} = useContext(Context)



	useEffect(() => {
		actions.getPeople()
		actions.getPlanets()
		actions.getVehicles()
	}, [])

	return (
		<div className="container text-center my-5">
			<h1>Characters</h1>
			<div className="container d-flex overflow-auto mb-5" style={{ gap: "1rem" }}>
				{store.people.length > 0 ? store.people.map((item) => <Card key={item.uid} name={item.name} id={item.uid} categories={"people"} />) : null}
			</div>
			<h1>Planets</h1>
			<div className="container d-flex overflow-auto mb-5" style={{ gap: "1rem" }}>
				{store.planets.length > 0 ? store.planets.map((item) => <Card key={item.uid} name={item.name} id={item.uid} categories={"planets"} />) : null}
			</div>
			<h1>Vehicles</h1>
			<div className="container d-flex overflow-auto mb-5" style={{ gap: "1rem" }}>
				{store.vehicles.length > 0 ? store.vehicles.map((item) => <Card key={item.uid} name={item.name} id={item.uid} categories={"vehicles"} />) : null}
			</div>
		</div>
	)
};
