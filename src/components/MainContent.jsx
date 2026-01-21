import { useState } from "react";
import languages from "../assets/languages"
import MainContentList from


    function MainContent() {



        return (

            <div className="container pt-5 ps-5 d-inline-flex gap-4">
                {
                    languages.map((content) => (
                        <MainContentList
                            key={content.id}
                            title={content.title}
                        />

                    ))}
            </div>


        )
    }

export default MainContent