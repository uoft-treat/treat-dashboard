import {observer}         from "mobx-react";
import React, {useEffect} from "react";
import {experimentStore}  from "../../../stores/ExperimentStore";
import {Link}             from "react-router-dom";

const ExperimentListingPage = observer(() => {

    useEffect(() => {
        async function init() {
            await experimentStore.loadExperiments();
        }
        init();
    }, []);

    return (
        <div>
            <h2>All Experiments</h2>
            <ul>
                {experimentStore.experiments.map(experiment => {
                    return (
                        <li>
                            {experiment.name} by {experiment.author}&nbsp;
                            [ <Link to={"/"}>Edit</Link> ]
                        </li>
                    )
                })}
            </ul>
        </div>
    )

});

export default ExperimentListingPage;
