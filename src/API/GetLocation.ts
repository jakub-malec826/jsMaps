export interface Position {
	lat: number;
	lng: number;
}

export async function GetLocation<Position>(place: string): Promise<Position> {
    place = place.replace(/\s+/g, "+");


    return await fetch(
        `https://geocode.search.hereapi.com/v1/geocode?q=${place}&apiKey=${import.meta.env.VITE_HERE_API_KEY
        }`
    )
        .then((res) => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        })
        .then((data) => {
			if (data.items.length === 0) {
				throw new Error("There are no addresses");
			}
			return data.items[0].position;
		})
		.catch((err: Error) => console.error(err.name, err.message));
}
