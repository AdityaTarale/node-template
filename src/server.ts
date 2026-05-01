import app from "./app.js";
import { Config } from "./config/index.js";
import logger from "./config/logger.js";

const startSever = () => {
    const PORT = Config.PORT;
    try {
        const server = app.listen(PORT, () => {
            logger.info(`Listening on port`, { port: PORT });
        });

        server.on("error", (error) => {
            logger.info("Server error:", error);
            process.exit(1);
        });
    } catch (error) {
        logger.info(error);
        process.exit(1);
    }
};

startSever();
