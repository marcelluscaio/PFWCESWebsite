import { baseImageUrl } from "./domain";

async function retrieveImageUrl(id) {
	const response = await fetch(`${baseImageUrl}${id}`);
	const imageObject = await response.json();
	return imageObject.guid.rendered;
}

export default retrieveImageUrl;
