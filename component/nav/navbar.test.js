import react from "react";
import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"
import Navbar from "./navbar";


test('se esta renderizando', () => {
    const component = render(<Navbar></Navbar>)
    console.log(component)
})
