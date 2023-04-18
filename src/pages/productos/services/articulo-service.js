import { adaptTo } from "../adapters/articulo-adapter";

export async function find() {
    const data = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1sGDfodoc5aPgj5JGByqXAngeY5x3qq1fu35ntGGSjF0/values/articulos!A:V?key=AIzaSyChhkYJ6yAjHDZtNlagKnK9KOdbQTVm0Ug`);
    const jsonData = await data.json();
    return adaptTo(jsonData);
}