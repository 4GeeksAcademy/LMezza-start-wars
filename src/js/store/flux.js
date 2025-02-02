const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			//items: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// getInfoItem: async () => {
			// 	const requestOptions = {
			// 		method: "GET",
			// 		redirect: "follow"
			// 	};
		
			// 	try {
			// 		const response = await fetch(`https://www.swapi.tech/api/${params.categories}/${params.id}`, requestOptions);
			// 		const data = await response.json();
			// 		setStore({items:data.result})
			// 	} catch (error) {
			// 		console.error(error);
			// 	};
			//  },
			getInfoPeople: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
		
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles", requestOptions);
					const data = await response.json();
					setStore({vehicles:data.results})
				} catch (error) {
					console.error(error);
				};
			},
			getVehicles: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles", requestOptions);
					const data = await response.json();
					setStore({vehicles:data.results})
				} catch (error) {
					console.error(error);
				};
			},
			getPlanets: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
		
				try {
					const response = await fetch("https://www.swapi.tech/api/planets", requestOptions);
					const data = await response.json();
					setStore({planets:data.results})
				} catch (error) {
					console.error(error);
				};
			},
			getPeople: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
		
				try {
					const response = await fetch("https://www.swapi.tech/api/people", requestOptions);
					const data = await response.json();
					//setPeople(data.results)
					setStore({people:data.results});
					
				} catch (error) {
					console.error(error);
				};
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
