import app from "./app.js";
import { Config } from "./config/index.js";

const startSever = () => {
    const PORT = Config.PORT;
    try {
        const server = app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });

        server.on("error", (error) => {
            console.error("Server error:", error);
            process.exit(1);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startSever();
