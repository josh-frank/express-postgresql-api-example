import express from "express";
import { testEnvironmentVariable } from "../settings";

const indexRouter = express.Router();

indexRouter.get( "/", ( request, response ) => response.status( 200 ).json( { message: testEnvironmentVariable } ) );

export default indexRouter;