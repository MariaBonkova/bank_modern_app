import React from "react";
import {airbnb, binance, coinbase, dropbox} from "../assets";
import styles from "../style.js";
import {client} from "../constants"

const Clients = () => (
    <section id="clients" className={`${styles.flexCenter}  my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {client.map((client,index) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                    <img src={client.logo} alt="logo"  className="sm:w-[192px] w-[100px] object-contain"/>
                </div>


            ))}
        </div>
    </section>

)

export default Clients;