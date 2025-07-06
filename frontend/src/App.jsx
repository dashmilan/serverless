

import { useEffect, useState } from "react";
import axios from "axios";
//import baseUrl from "./config/baseUrl.js";

export default function App() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        axios.get("/api/hello") // ❗️not "/hello" directly
            .then(res => setMsg(res.data.message))
            .catch(err => {
                console.error("Backend error:", err);
                setMsg("Error calling backend");
            });
    }, []);


    // useEffect(() => {
    //     axios.get(`${baseUrl}/hello`)          // works in prod; proxied in dev (see vite.config.js)
    //         .then((res) => setMsg(res.data.message))
    //         .catch(console.error);
    // }, []);

    return (
        <main className="min-h-screen grid place-content-center gap-4 text-center">
            <h1 className="text-3xl font-bold">Serverless Demo</h1>
            <p className="text-xl">{msg || "Loading..."}</p>
        </main>
    );
}

