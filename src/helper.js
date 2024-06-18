import axios from "axios";

export function convertTagsToArray(tagsString) {
    const tagsArray = tagsString.split(",").map((tag) => tag.trim());

    const tagArray = [];

    tagsArray.forEach((tag) => {
        const parts = tag.split("_");
        if (parts.length === 2) {
            const key = parts[0];
            const value = parts[1];
            tagArray.push(parts[0] + " - " + parts[1]);
        } else {
            tagArray.push(parts[0]);
        }
    });

    return tagArray;
}

export function removeFirstPTag(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const firstPTag = doc.querySelector("p");
    if (firstPTag) {
        firstPTag.parentNode.removeChild(firstPTag);
    }
    const modifiedHtml = new XMLSerializer().serializeToString(doc);
    return modifiedHtml;
}

export function extractFirstPTagText(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const firstPTag = doc.querySelector("p");
    if (firstPTag) {
        return firstPTag.textContent.trim();
    } else {
        return "";
    }
}

export function searchByName(inputString, arrayOfObjects) {
    const searchString = inputString.toLowerCase();
    const result = arrayOfObjects?.filter((obj) =>
        obj.title.toLowerCase().includes(searchString)
    );

    return result;
}

export const fetchData = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_URI);
        const products = response.data;
        return { data: products, status: "success" };
    } catch (error) {
        console.error("Error fetching Shopify products:", error);
        return { data: [], status: "error" };
    }
};
