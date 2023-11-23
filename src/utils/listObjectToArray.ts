function listObjectToArray(list) {
	const listAsArray = [];
	for (const item in list) {
		const object = list[item];
		listAsArray.push({
			title: object["title"],
			description: object["description"],
		});
	}

	return listAsArray;
}

export default listObjectToArray;
