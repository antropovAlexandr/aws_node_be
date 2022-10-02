import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";
import openapi from "../openapi.json";

export const initSwagger = (): void => {
  SwaggerUIBundle({
    spec: openapi,
    dom_id: "#swagger",
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });
};
