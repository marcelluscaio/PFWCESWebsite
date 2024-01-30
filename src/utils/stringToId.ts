function stringToId(string: string) {
	return `#${string.toLowerCase().normalize().replaceAll(" ", "-")}`;
}

export default stringToId;
