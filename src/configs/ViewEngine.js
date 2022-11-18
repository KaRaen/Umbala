import express from "express";
const configViewEngine = (app) => {
    app.set("ViewEngine", "ejs");
    app.set("views", "./src/views")

}
export default configViewEngine