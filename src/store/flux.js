const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},

		actions: {
			addFavorite: (newFavorite) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, newFavorite]});
				console.log("Added to favorites!")
				console.log(newFavorite)
			},
			
			deleteFavorite: (item) => {
				const store = getStore();
				let newFav = store.favorites.filter((i) => item !== i)
				setStore({favorites: newFav})
				console.log("Deleted from favorites!")
			},
		}
	};
};

export default getState;
